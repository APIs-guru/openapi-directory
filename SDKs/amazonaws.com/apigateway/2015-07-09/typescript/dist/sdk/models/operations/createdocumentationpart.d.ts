import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateDocumentationPartPathParams extends SpeakeasyBase {
    restapiId: string;
}
export declare class CreateDocumentationPartHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the target API entity to which the documentation applies.
**/
export declare class CreateDocumentationPartRequestBodyLocation extends SpeakeasyBase {
    method?: string;
    name?: string;
    path?: string;
    statusCode?: string;
    type?: shared.DocumentationPartTypeEnum;
}
export declare class CreateDocumentationPartRequestBody extends SpeakeasyBase {
    location: CreateDocumentationPartRequestBodyLocation;
    properties: string;
}
export declare class CreateDocumentationPartRequest extends SpeakeasyBase {
    pathParams: CreateDocumentationPartPathParams;
    headers: CreateDocumentationPartHeaders;
    request: CreateDocumentationPartRequestBody;
}
export declare class CreateDocumentationPartResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    documentationPart?: shared.DocumentationPart;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
