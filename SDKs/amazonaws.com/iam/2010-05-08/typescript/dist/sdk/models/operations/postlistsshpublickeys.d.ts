import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListSshPublicKeysActionEnum {
    ListSshPublicKeys = "ListSSHPublicKeys"
}
export declare enum PostListSshPublicKeysVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class PostListSshPublicKeysQueryParams extends SpeakeasyBase {
    action: PostListSshPublicKeysActionEnum;
    marker?: string;
    maxItems?: string;
    version: PostListSshPublicKeysVersionEnum;
}
export declare class PostListSshPublicKeysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostListSshPublicKeysRequest extends SpeakeasyBase {
    queryParams: PostListSshPublicKeysQueryParams;
    headers: PostListSshPublicKeysHeaders;
    request?: Uint8Array;
}
export declare class PostListSshPublicKeysResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
