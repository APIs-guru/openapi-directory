import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateServiceXAmzTargetEnum {
    AppRunnerUpdateService = "AppRunner.UpdateService"
}
export declare class UpdateServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServiceXAmzTargetEnum;
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    headers: UpdateServiceHeaders;
    request: shared.UpdateServiceRequest;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceErrorException?: any;
    invalidRequestException?: any;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateServiceResponse?: shared.UpdateServiceResponse;
}
