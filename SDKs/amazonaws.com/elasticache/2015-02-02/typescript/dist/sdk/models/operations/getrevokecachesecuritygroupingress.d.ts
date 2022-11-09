import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRevokeCacheSecurityGroupIngressActionEnum {
    RevokeCacheSecurityGroupIngress = "RevokeCacheSecurityGroupIngress"
}
export declare enum GetRevokeCacheSecurityGroupIngressVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetRevokeCacheSecurityGroupIngressQueryParams extends SpeakeasyBase {
    action: GetRevokeCacheSecurityGroupIngressActionEnum;
    cacheSecurityGroupName: string;
    ec2SecurityGroupName: string;
    ec2SecurityGroupOwnerId: string;
    version: GetRevokeCacheSecurityGroupIngressVersionEnum;
}
export declare class GetRevokeCacheSecurityGroupIngressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRevokeCacheSecurityGroupIngressRequest extends SpeakeasyBase {
    queryParams: GetRevokeCacheSecurityGroupIngressQueryParams;
    headers: GetRevokeCacheSecurityGroupIngressHeaders;
}
export declare class GetRevokeCacheSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
