import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetMoveAddressToVpcActionEnum {
    MoveAddressToVpc = "MoveAddressToVpc"
}
export declare enum GetMoveAddressToVpcVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetMoveAddressToVpcQueryParams extends SpeakeasyBase {
    action: GetMoveAddressToVpcActionEnum;
    dryRun?: boolean;
    publicIp: string;
    version: GetMoveAddressToVpcVersionEnum;
}
export declare class GetMoveAddressToVpcHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMoveAddressToVpcRequest extends SpeakeasyBase {
    queryParams: GetMoveAddressToVpcQueryParams;
    headers: GetMoveAddressToVpcHeaders;
}
export declare class GetMoveAddressToVpcResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
