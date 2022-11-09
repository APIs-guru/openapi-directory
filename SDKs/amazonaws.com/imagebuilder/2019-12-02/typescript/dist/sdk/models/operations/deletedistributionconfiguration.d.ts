import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteDistributionConfigurationQueryParams extends SpeakeasyBase {
    distributionConfigurationArn: string;
}
export declare class DeleteDistributionConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDistributionConfigurationRequest extends SpeakeasyBase {
    queryParams: DeleteDistributionConfigurationQueryParams;
    headers: DeleteDistributionConfigurationHeaders;
}
export declare class DeleteDistributionConfigurationResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    deleteDistributionConfigurationResponse?: shared.DeleteDistributionConfigurationResponse;
    forbiddenException?: any;
    invalidRequestException?: any;
    resourceDependencyException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
