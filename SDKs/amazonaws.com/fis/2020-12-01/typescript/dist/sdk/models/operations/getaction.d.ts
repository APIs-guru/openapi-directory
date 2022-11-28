import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetActionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetActionRequest extends SpeakeasyBase {
    pathParams: GetActionPathParams;
    headers: GetActionHeaders;
}
export declare class GetActionResponse extends SpeakeasyBase {
    contentType: string;
    getActionResponse?: shared.GetActionResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
