import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostVerifyDomainDkimActionEnum {
    VerifyDomainDkim = "VerifyDomainDkim"
}
export declare enum PostVerifyDomainDkimVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostVerifyDomainDkimQueryParams extends SpeakeasyBase {
    action: PostVerifyDomainDkimActionEnum;
    version: PostVerifyDomainDkimVersionEnum;
}
export declare class PostVerifyDomainDkimHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostVerifyDomainDkimRequest extends SpeakeasyBase {
    queryParams: PostVerifyDomainDkimQueryParams;
    headers: PostVerifyDomainDkimHeaders;
    request?: Uint8Array;
}
export declare class PostVerifyDomainDkimResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
