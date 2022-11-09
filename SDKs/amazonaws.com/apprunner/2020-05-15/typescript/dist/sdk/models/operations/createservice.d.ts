import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateServiceXAmzTargetEnum {
    AppRunnerCreateService = "AppRunner.CreateService"
}
export declare class CreateServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateServiceXAmzTargetEnum;
}
export declare class CreateServiceRequest extends SpeakeasyBase {
    headers: CreateServiceHeaders;
    request: shared.CreateServiceRequest;
}
export declare class CreateServiceResponse extends SpeakeasyBase {
    contentType: string;
    createServiceResponse?: shared.CreateServiceResponse;
    internalServiceErrorException?: any;
    invalidRequestException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
}
