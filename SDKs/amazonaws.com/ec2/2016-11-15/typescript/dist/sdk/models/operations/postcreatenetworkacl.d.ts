import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateNetworkAclActionEnum {
    CreateNetworkAcl = "CreateNetworkAcl"
}
export declare enum PostCreateNetworkAclVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateNetworkAclQueryParams extends SpeakeasyBase {
    action: PostCreateNetworkAclActionEnum;
    version: PostCreateNetworkAclVersionEnum;
}
export declare class PostCreateNetworkAclHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateNetworkAclRequest extends SpeakeasyBase {
    queryParams: PostCreateNetworkAclQueryParams;
    headers: PostCreateNetworkAclHeaders;
    request?: Uint8Array;
}
export declare class PostCreateNetworkAclResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
