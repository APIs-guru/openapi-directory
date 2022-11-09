import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteVpcActionEnum {
    DeleteVpc = "DeleteVpc"
}
export declare enum GetDeleteVpcVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteVpcQueryParams extends SpeakeasyBase {
    action: GetDeleteVpcActionEnum;
    dryRun?: boolean;
    version: GetDeleteVpcVersionEnum;
    vpcId: string;
}
export declare class GetDeleteVpcHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteVpcRequest extends SpeakeasyBase {
    queryParams: GetDeleteVpcQueryParams;
    headers: GetDeleteVpcHeaders;
}
export declare class GetDeleteVpcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
