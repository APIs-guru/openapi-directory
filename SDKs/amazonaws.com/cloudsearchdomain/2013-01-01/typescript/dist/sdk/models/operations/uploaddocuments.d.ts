import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UploadDocumentsFormatEnum {
    Sdk = "sdk"
}
export declare class UploadDocumentsQueryParams extends SpeakeasyBase {
    format: UploadDocumentsFormatEnum;
}
export declare enum UploadDocumentsContentTypeEnum {
    ApplicationJson = "application/json",
    ApplicationXml = "application/xml"
}
export declare class UploadDocumentsHeaders extends SpeakeasyBase {
    contentType: UploadDocumentsContentTypeEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UploadDocumentsRequestBody extends SpeakeasyBase {
    documents: string;
}
export declare class UploadDocumentsRequest extends SpeakeasyBase {
    queryParams: UploadDocumentsQueryParams;
    headers: UploadDocumentsHeaders;
    request: UploadDocumentsRequestBody;
}
export declare class UploadDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    documentServiceException?: shared.DocumentServiceException;
    statusCode: number;
    uploadDocumentsResponse?: shared.UploadDocumentsResponse;
}
