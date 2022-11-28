import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateDomainActionEnum {
    CreateDomain = "CreateDomain"
}
export declare enum PostCreateDomainVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class PostCreateDomainQueryParams extends SpeakeasyBase {
    action: PostCreateDomainActionEnum;
    version: PostCreateDomainVersionEnum;
}
export declare class PostCreateDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateDomainRequest extends SpeakeasyBase {
    queryParams: PostCreateDomainQueryParams;
    headers: PostCreateDomainHeaders;
    request?: Uint8Array;
}
export declare class PostCreateDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
