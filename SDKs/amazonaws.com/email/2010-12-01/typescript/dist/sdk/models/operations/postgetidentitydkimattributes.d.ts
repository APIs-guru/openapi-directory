import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetIdentityDkimAttributesActionEnum {
    GetIdentityDkimAttributes = "GetIdentityDkimAttributes"
}
export declare enum PostGetIdentityDkimAttributesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostGetIdentityDkimAttributesQueryParams extends SpeakeasyBase {
    action: PostGetIdentityDkimAttributesActionEnum;
    version: PostGetIdentityDkimAttributesVersionEnum;
}
export declare class PostGetIdentityDkimAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetIdentityDkimAttributesRequest extends SpeakeasyBase {
    queryParams: PostGetIdentityDkimAttributesQueryParams;
    headers: PostGetIdentityDkimAttributesHeaders;
    request?: Uint8Array;
}
export declare class PostGetIdentityDkimAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
