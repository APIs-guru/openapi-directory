import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAuthorizeCacheSecurityGroupIngressActionEnum {
    AuthorizeCacheSecurityGroupIngress = "AuthorizeCacheSecurityGroupIngress"
}
export declare enum GetAuthorizeCacheSecurityGroupIngressVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetAuthorizeCacheSecurityGroupIngressQueryParams extends SpeakeasyBase {
    action: GetAuthorizeCacheSecurityGroupIngressActionEnum;
    cacheSecurityGroupName: string;
    ec2SecurityGroupName: string;
    ec2SecurityGroupOwnerId: string;
    version: GetAuthorizeCacheSecurityGroupIngressVersionEnum;
}
export declare class GetAuthorizeCacheSecurityGroupIngressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAuthorizeCacheSecurityGroupIngressRequest extends SpeakeasyBase {
    queryParams: GetAuthorizeCacheSecurityGroupIngressQueryParams;
    headers: GetAuthorizeCacheSecurityGroupIngressHeaders;
}
export declare class GetAuthorizeCacheSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
