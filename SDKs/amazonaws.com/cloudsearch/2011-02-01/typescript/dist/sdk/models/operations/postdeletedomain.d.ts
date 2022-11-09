import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteDomainActionEnum {
    DeleteDomain = "DeleteDomain"
}
export declare enum PostDeleteDomainVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class PostDeleteDomainQueryParams extends SpeakeasyBase {
    action: PostDeleteDomainActionEnum;
    version: PostDeleteDomainVersionEnum;
}
export declare class PostDeleteDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteDomainRequest extends SpeakeasyBase {
    queryParams: PostDeleteDomainQueryParams;
    headers: PostDeleteDomainHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
