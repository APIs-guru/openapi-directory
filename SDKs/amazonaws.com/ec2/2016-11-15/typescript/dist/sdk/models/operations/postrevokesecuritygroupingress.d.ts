import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRevokeSecurityGroupIngressActionEnum {
    RevokeSecurityGroupIngress = "RevokeSecurityGroupIngress"
}
export declare enum PostRevokeSecurityGroupIngressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostRevokeSecurityGroupIngressQueryParams extends SpeakeasyBase {
    action: PostRevokeSecurityGroupIngressActionEnum;
    version: PostRevokeSecurityGroupIngressVersionEnum;
}
export declare class PostRevokeSecurityGroupIngressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRevokeSecurityGroupIngressRequest extends SpeakeasyBase {
    queryParams: PostRevokeSecurityGroupIngressQueryParams;
    headers: PostRevokeSecurityGroupIngressHeaders;
    request?: Uint8Array;
}
export declare class PostRevokeSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
