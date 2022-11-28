import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetControlPathParams extends SpeakeasyBase {
    controlId: string;
}
export declare class GetControlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetControlRequest extends SpeakeasyBase {
    pathParams: GetControlPathParams;
    headers: GetControlHeaders;
}
export declare class GetControlResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getControlResponse?: shared.GetControlResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
