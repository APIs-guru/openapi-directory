import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateNetworkAclEntryActionEnum {
    CreateNetworkAclEntry = "CreateNetworkAclEntry"
}
export declare enum PostCreateNetworkAclEntryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateNetworkAclEntryQueryParams extends SpeakeasyBase {
    action: PostCreateNetworkAclEntryActionEnum;
    version: PostCreateNetworkAclEntryVersionEnum;
}
export declare class PostCreateNetworkAclEntryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateNetworkAclEntryRequest extends SpeakeasyBase {
    queryParams: PostCreateNetworkAclEntryQueryParams;
    headers: PostCreateNetworkAclEntryHeaders;
    request?: Uint8Array;
}
export declare class PostCreateNetworkAclEntryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
