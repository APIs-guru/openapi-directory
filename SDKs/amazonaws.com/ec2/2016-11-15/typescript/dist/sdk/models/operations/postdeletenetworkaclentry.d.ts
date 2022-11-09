import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteNetworkAclEntryActionEnum {
    DeleteNetworkAclEntry = "DeleteNetworkAclEntry"
}
export declare enum PostDeleteNetworkAclEntryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteNetworkAclEntryQueryParams extends SpeakeasyBase {
    action: PostDeleteNetworkAclEntryActionEnum;
    version: PostDeleteNetworkAclEntryVersionEnum;
}
export declare class PostDeleteNetworkAclEntryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteNetworkAclEntryRequest extends SpeakeasyBase {
    queryParams: PostDeleteNetworkAclEntryQueryParams;
    headers: PostDeleteNetworkAclEntryHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteNetworkAclEntryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
