import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteLunaClientXAmzTargetEnum {
    CloudHsmFrontendServiceDeleteLunaClient = "CloudHsmFrontendService.DeleteLunaClient"
}
export declare class DeleteLunaClientHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLunaClientXAmzTargetEnum;
}
export declare class DeleteLunaClientRequest extends SpeakeasyBase {
    headers: DeleteLunaClientHeaders;
    request: shared.DeleteLunaClientRequest;
}
export declare class DeleteLunaClientResponse extends SpeakeasyBase {
    cloudHsmInternalException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    deleteLunaClientResponse?: shared.DeleteLunaClientResponse;
    invalidRequestException?: any;
    statusCode: number;
}
