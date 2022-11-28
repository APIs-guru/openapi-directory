import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportDocumentationPartsPathParams extends SpeakeasyBase {
    restapiId: string;
}
export declare enum ImportDocumentationPartsModeEnum {
    Merge = "merge",
    Overwrite = "overwrite"
}
export declare class ImportDocumentationPartsQueryParams extends SpeakeasyBase {
    failonwarnings?: boolean;
    mode?: ImportDocumentationPartsModeEnum;
}
export declare class ImportDocumentationPartsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ImportDocumentationPartsRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class ImportDocumentationPartsRequest extends SpeakeasyBase {
    pathParams: ImportDocumentationPartsPathParams;
    queryParams: ImportDocumentationPartsQueryParams;
    headers: ImportDocumentationPartsHeaders;
    request: ImportDocumentationPartsRequestBody;
}
export declare class ImportDocumentationPartsResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    documentationPartIds?: shared.DocumentationPartIds;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
