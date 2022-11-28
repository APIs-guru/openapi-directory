import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateHapgXAmzTargetEnum {
    CloudHsmFrontendServiceCreateHapg = "CloudHsmFrontendService.CreateHapg"
}
export declare class CreateHapgHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateHapgXAmzTargetEnum;
}
export declare class CreateHapgRequest extends SpeakeasyBase {
    headers: CreateHapgHeaders;
    request: shared.CreateHapgRequest;
}
export declare class CreateHapgResponse extends SpeakeasyBase {
    cloudHsmInternalException?: any;
    cloudHsmServiceException?: any;
    contentType: string;
    createHapgResponse?: shared.CreateHapgResponse;
    invalidRequestException?: any;
    statusCode: number;
}
