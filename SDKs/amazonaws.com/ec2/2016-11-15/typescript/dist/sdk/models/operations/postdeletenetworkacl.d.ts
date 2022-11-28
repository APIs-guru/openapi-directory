import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteNetworkAclActionEnum {
    DeleteNetworkAcl = "DeleteNetworkAcl"
}
export declare enum PostDeleteNetworkAclVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteNetworkAclQueryParams extends SpeakeasyBase {
    action: PostDeleteNetworkAclActionEnum;
    version: PostDeleteNetworkAclVersionEnum;
}
export declare class PostDeleteNetworkAclHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteNetworkAclRequest extends SpeakeasyBase {
    queryParams: PostDeleteNetworkAclQueryParams;
    headers: PostDeleteNetworkAclHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteNetworkAclResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
