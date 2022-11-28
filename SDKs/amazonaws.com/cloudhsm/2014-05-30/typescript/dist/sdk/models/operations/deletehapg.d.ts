import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteHapgXAmzTargetEnum {
    CloudHsmFrontendServiceDeleteHapg = "CloudHsmFrontendService.DeleteHapg"
}
export declare class DeleteHapgHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteHapgXAmzTargetEnum;
}
export declare class DeleteHapgRequest extends SpeakeasyBase {
    headers: DeleteHapgHeaders;
    request: shared.DeleteHapgRequest;
}
export declare class DeleteHapgResponse extends SpeakeasyBase {
    cloudHsmInternalException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    deleteHapgResponse?: shared.DeleteHapgResponse;
    invalidRequestException?: any;
    statusCode: number;
}
