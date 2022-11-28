import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelContactPathParams extends SpeakeasyBase {
    contactId: string;
}
export declare class CancelContactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelContactRequest extends SpeakeasyBase {
    pathParams: CancelContactPathParams;
    headers: CancelContactHeaders;
}
export declare class CancelContactResponse extends SpeakeasyBase {
    contactIdResponse?: shared.ContactIdResponse;
    contentType: string;
    dependencyException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
