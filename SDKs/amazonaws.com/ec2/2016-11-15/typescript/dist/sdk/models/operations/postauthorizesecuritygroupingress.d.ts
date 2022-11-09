import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAuthorizeSecurityGroupIngressActionEnum {
    AuthorizeSecurityGroupIngress = "AuthorizeSecurityGroupIngress"
}
export declare enum PostAuthorizeSecurityGroupIngressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAuthorizeSecurityGroupIngressQueryParams extends SpeakeasyBase {
    action: PostAuthorizeSecurityGroupIngressActionEnum;
    version: PostAuthorizeSecurityGroupIngressVersionEnum;
}
export declare class PostAuthorizeSecurityGroupIngressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAuthorizeSecurityGroupIngressRequest extends SpeakeasyBase {
    queryParams: PostAuthorizeSecurityGroupIngressQueryParams;
    headers: PostAuthorizeSecurityGroupIngressHeaders;
    request?: Uint8Array;
}
export declare class PostAuthorizeSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
