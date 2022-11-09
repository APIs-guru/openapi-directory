import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateLunaClientXAmzTargetEnum {
    CloudHsmFrontendServiceCreateLunaClient = "CloudHsmFrontendService.CreateLunaClient"
}
export declare class CreateLunaClientHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLunaClientXAmzTargetEnum;
}
export declare class CreateLunaClientRequest extends SpeakeasyBase {
    headers: CreateLunaClientHeaders;
    request: shared.CreateLunaClientRequest;
}
export declare class CreateLunaClientResponse extends SpeakeasyBase {
    cloudHsmInternalException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    createLunaClientResponse?: shared.CreateLunaClientResponse;
    invalidRequestException?: any;
    statusCode: number;
}
