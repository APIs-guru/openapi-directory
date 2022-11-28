import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeLifecycleConfigurationPathParams extends SpeakeasyBase {
    fileSystemId: string;
}
export declare class DescribeLifecycleConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeLifecycleConfigurationRequest extends SpeakeasyBase {
    pathParams: DescribeLifecycleConfigurationPathParams;
    headers: DescribeLifecycleConfigurationHeaders;
}
export declare class DescribeLifecycleConfigurationResponse extends SpeakeasyBase {
    badRequest?: any;
    contentType: string;
    fileSystemNotFound?: any;
    internalServerError?: any;
    lifecycleConfigurationDescription?: shared.LifecycleConfigurationDescription;
    statusCode: number;
}
