import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteNatGatewayActionEnum {
    DeleteNatGateway = "DeleteNatGateway"
}
export declare enum GetDeleteNatGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteNatGatewayQueryParams extends SpeakeasyBase {
    action: GetDeleteNatGatewayActionEnum;
    dryRun?: boolean;
    natGatewayId: string;
    version: GetDeleteNatGatewayVersionEnum;
}
export declare class GetDeleteNatGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteNatGatewayRequest extends SpeakeasyBase {
    queryParams: GetDeleteNatGatewayQueryParams;
    headers: GetDeleteNatGatewayHeaders;
}
export declare class GetDeleteNatGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
