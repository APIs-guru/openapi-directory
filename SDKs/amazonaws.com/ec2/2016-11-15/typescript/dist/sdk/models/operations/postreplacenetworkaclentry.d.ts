import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostReplaceNetworkAclEntryActionEnum {
    ReplaceNetworkAclEntry = "ReplaceNetworkAclEntry"
}
export declare enum PostReplaceNetworkAclEntryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostReplaceNetworkAclEntryQueryParams extends SpeakeasyBase {
    action: PostReplaceNetworkAclEntryActionEnum;
    version: PostReplaceNetworkAclEntryVersionEnum;
}
export declare class PostReplaceNetworkAclEntryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostReplaceNetworkAclEntryRequest extends SpeakeasyBase {
    queryParams: PostReplaceNetworkAclEntryQueryParams;
    headers: PostReplaceNetworkAclEntryHeaders;
    request?: Uint8Array;
}
export declare class PostReplaceNetworkAclEntryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
