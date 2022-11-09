import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostIndexDocumentsActionEnum {
    IndexDocuments = "IndexDocuments"
}
export declare enum PostIndexDocumentsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostIndexDocumentsQueryParams extends SpeakeasyBase {
    action: PostIndexDocumentsActionEnum;
    version: PostIndexDocumentsVersionEnum;
}
export declare class PostIndexDocumentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostIndexDocumentsRequest extends SpeakeasyBase {
    queryParams: PostIndexDocumentsQueryParams;
    headers: PostIndexDocumentsHeaders;
    request?: Uint8Array;
}
export declare class PostIndexDocumentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
