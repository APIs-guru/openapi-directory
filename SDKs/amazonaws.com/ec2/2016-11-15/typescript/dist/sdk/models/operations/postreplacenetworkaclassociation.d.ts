import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostReplaceNetworkAclAssociationActionEnum {
    ReplaceNetworkAclAssociation = "ReplaceNetworkAclAssociation"
}
export declare enum PostReplaceNetworkAclAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostReplaceNetworkAclAssociationQueryParams extends SpeakeasyBase {
    action: PostReplaceNetworkAclAssociationActionEnum;
    version: PostReplaceNetworkAclAssociationVersionEnum;
}
export declare class PostReplaceNetworkAclAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostReplaceNetworkAclAssociationRequest extends SpeakeasyBase {
    queryParams: PostReplaceNetworkAclAssociationQueryParams;
    headers: PostReplaceNetworkAclAssociationHeaders;
    request?: Uint8Array;
}
export declare class PostReplaceNetworkAclAssociationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
