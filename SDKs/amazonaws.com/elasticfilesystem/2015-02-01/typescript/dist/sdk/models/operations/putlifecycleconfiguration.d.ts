import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutLifecycleConfigurationPathParams extends SpeakeasyBase {
    fileSystemId: string;
}
export declare class PutLifecycleConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutLifecycleConfigurationRequestBody extends SpeakeasyBase {
    lifecyclePolicies: shared.LifecyclePolicy[];
}
export declare class PutLifecycleConfigurationRequest extends SpeakeasyBase {
    pathParams: PutLifecycleConfigurationPathParams;
    headers: PutLifecycleConfigurationHeaders;
    request: PutLifecycleConfigurationRequestBody;
}
export declare class PutLifecycleConfigurationResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    fileSystemNotFound?: any;
    incorrectFileSystemLifeCycleState?: any;
    internalServerError?: any;
    lifecycleConfigurationDescription?: shared.LifecycleConfigurationDescription;
    statusCode: number;
}
