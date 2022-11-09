import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAttachClassicLinkVpcActionEnum {
    AttachClassicLinkVpc = "AttachClassicLinkVpc"
}
export declare enum GetAttachClassicLinkVpcVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAttachClassicLinkVpcQueryParams extends SpeakeasyBase {
    action: GetAttachClassicLinkVpcActionEnum;
    dryRun?: boolean;
    instanceId: string;
    securityGroupId: string[];
    version: GetAttachClassicLinkVpcVersionEnum;
    vpcId: string;
}
export declare class GetAttachClassicLinkVpcHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAttachClassicLinkVpcRequest extends SpeakeasyBase {
    queryParams: GetAttachClassicLinkVpcQueryParams;
    headers: GetAttachClassicLinkVpcHeaders;
}
export declare class GetAttachClassicLinkVpcResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
