import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIndexingConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetIndexingConfigurationRequest extends SpeakeasyBase {
    headers: GetIndexingConfigurationHeaders;
}
export declare class GetIndexingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    getIndexingConfigurationResponse?: shared.GetIndexingConfigurationResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
