import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSetIdentityDkimEnabledActionEnum {
    SetIdentityDkimEnabled = "SetIdentityDkimEnabled"
}
export declare enum PostSetIdentityDkimEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostSetIdentityDkimEnabledQueryParams extends SpeakeasyBase {
    action: PostSetIdentityDkimEnabledActionEnum;
    version: PostSetIdentityDkimEnabledVersionEnum;
}
export declare class PostSetIdentityDkimEnabledHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetIdentityDkimEnabledRequest extends SpeakeasyBase {
    queryParams: PostSetIdentityDkimEnabledQueryParams;
    headers: PostSetIdentityDkimEnabledHeaders;
    request?: Uint8Array;
}
export declare class PostSetIdentityDkimEnabledResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
