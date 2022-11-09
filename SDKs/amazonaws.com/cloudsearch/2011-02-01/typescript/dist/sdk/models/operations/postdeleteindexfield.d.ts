import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteIndexFieldActionEnum {
    DeleteIndexField = "DeleteIndexField"
}
export declare enum PostDeleteIndexFieldVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class PostDeleteIndexFieldQueryParams extends SpeakeasyBase {
    action: PostDeleteIndexFieldActionEnum;
    version: PostDeleteIndexFieldVersionEnum;
}
export declare class PostDeleteIndexFieldHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteIndexFieldRequest extends SpeakeasyBase {
    queryParams: PostDeleteIndexFieldQueryParams;
    headers: PostDeleteIndexFieldHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteIndexFieldResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
