import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAuthorizeSecurityGroupEgressActionEnum {
    AuthorizeSecurityGroupEgress = "AuthorizeSecurityGroupEgress"
}
export declare enum PostAuthorizeSecurityGroupEgressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAuthorizeSecurityGroupEgressQueryParams extends SpeakeasyBase {
    action: PostAuthorizeSecurityGroupEgressActionEnum;
    version: PostAuthorizeSecurityGroupEgressVersionEnum;
}
export declare class PostAuthorizeSecurityGroupEgressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAuthorizeSecurityGroupEgressRequest extends SpeakeasyBase {
    queryParams: PostAuthorizeSecurityGroupEgressQueryParams;
    headers: PostAuthorizeSecurityGroupEgressHeaders;
    request?: Uint8Array;
}
export declare class PostAuthorizeSecurityGroupEgressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
