import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDocumentationPartPathParams extends SpeakeasyBase {
    partId: string;
    restapiId: string;
}
export declare class GetDocumentationPartHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDocumentationPartRequest extends SpeakeasyBase {
    pathParams: GetDocumentationPartPathParams;
    headers: GetDocumentationPartHeaders;
}
export declare class GetDocumentationPartResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    documentationPart?: shared.DocumentationPart;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
