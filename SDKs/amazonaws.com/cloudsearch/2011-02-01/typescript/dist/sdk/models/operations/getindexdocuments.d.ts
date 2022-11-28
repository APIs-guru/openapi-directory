import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetIndexDocumentsActionEnum {
    IndexDocuments = "IndexDocuments"
}
export declare enum GetIndexDocumentsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GetIndexDocumentsQueryParams extends SpeakeasyBase {
    action: GetIndexDocumentsActionEnum;
    domainName: string;
    version: GetIndexDocumentsVersionEnum;
}
export declare class GetIndexDocumentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetIndexDocumentsRequest extends SpeakeasyBase {
    queryParams: GetIndexDocumentsQueryParams;
    headers: GetIndexDocumentsHeaders;
}
export declare class GetIndexDocumentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
