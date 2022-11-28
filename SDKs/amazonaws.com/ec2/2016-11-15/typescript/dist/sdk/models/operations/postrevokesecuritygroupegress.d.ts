import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRevokeSecurityGroupEgressActionEnum {
    RevokeSecurityGroupEgress = "RevokeSecurityGroupEgress"
}
export declare enum PostRevokeSecurityGroupEgressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostRevokeSecurityGroupEgressQueryParams extends SpeakeasyBase {
    action: PostRevokeSecurityGroupEgressActionEnum;
    version: PostRevokeSecurityGroupEgressVersionEnum;
}
export declare class PostRevokeSecurityGroupEgressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRevokeSecurityGroupEgressRequest extends SpeakeasyBase {
    queryParams: PostRevokeSecurityGroupEgressQueryParams;
    headers: PostRevokeSecurityGroupEgressHeaders;
    request?: Uint8Array;
}
export declare class PostRevokeSecurityGroupEgressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
