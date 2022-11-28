import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutFileSystemPolicyPathParams extends SpeakeasyBase {
    fileSystemId: string;
}
export declare class PutFileSystemPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutFileSystemPolicyRequestBody extends SpeakeasyBase {
    bypassPolicyLockoutSafetyCheck?: boolean;
    policy: string;
}
export declare class PutFileSystemPolicyRequest extends SpeakeasyBase {
    pathParams: PutFileSystemPolicyPathParams;
    headers: PutFileSystemPolicyHeaders;
    request: PutFileSystemPolicyRequestBody;
}
export declare class PutFileSystemPolicyResponse extends SpeakeasyBase {
    contentType: string;
    fileSystemNotFound?: any;
    fileSystemPolicyDescription?: shared.FileSystemPolicyDescription;
    incorrectFileSystemLifeCycleState?: any;
    internalServerError?: any;
    invalidPolicyException?: any;
    statusCode: number;
}
