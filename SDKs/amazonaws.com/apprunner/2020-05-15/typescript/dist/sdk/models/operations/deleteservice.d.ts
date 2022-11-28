import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteServiceXAmzTargetEnum {
    AppRunnerDeleteService = "AppRunner.DeleteService"
}
export declare class DeleteServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteServiceXAmzTargetEnum;
}
export declare class DeleteServiceRequest extends SpeakeasyBase {
    headers: DeleteServiceHeaders;
    request: shared.DeleteServiceRequest;
}
export declare class DeleteServiceResponse extends SpeakeasyBase {
    contentType: string;
    deleteServiceResponse?: shared.DeleteServiceResponse;
    internalServiceErrorException?: any;
    invalidRequestException?: any;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
