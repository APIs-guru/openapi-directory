import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListDomainNamesActionEnum {
    ListDomainNames = "ListDomainNames"
}
export declare enum PostListDomainNamesVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostListDomainNamesQueryParams extends SpeakeasyBase {
    action: PostListDomainNamesActionEnum;
    version: PostListDomainNamesVersionEnum;
}
export declare class PostListDomainNamesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListDomainNamesRequest extends SpeakeasyBase {
    queryParams: PostListDomainNamesQueryParams;
    headers: PostListDomainNamesHeaders;
}
export declare class PostListDomainNamesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
