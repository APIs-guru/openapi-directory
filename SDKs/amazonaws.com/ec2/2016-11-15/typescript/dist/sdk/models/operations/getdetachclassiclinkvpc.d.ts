import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDetachClassicLinkVpcActionEnum {
    DetachClassicLinkVpc = "DetachClassicLinkVpc"
}
export declare enum GetDetachClassicLinkVpcVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDetachClassicLinkVpcQueryParams extends SpeakeasyBase {
    action: GetDetachClassicLinkVpcActionEnum;
    dryRun?: boolean;
    instanceId: string;
    version: GetDetachClassicLinkVpcVersionEnum;
    vpcId: string;
}
export declare class GetDetachClassicLinkVpcHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDetachClassicLinkVpcRequest extends SpeakeasyBase {
    queryParams: GetDetachClassicLinkVpcQueryParams;
    headers: GetDetachClassicLinkVpcHeaders;
}
export declare class GetDetachClassicLinkVpcResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
