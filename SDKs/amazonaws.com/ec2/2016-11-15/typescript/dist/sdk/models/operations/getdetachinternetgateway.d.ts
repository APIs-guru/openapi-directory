import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDetachInternetGatewayActionEnum {
    DetachInternetGateway = "DetachInternetGateway"
}
export declare enum GetDetachInternetGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDetachInternetGatewayQueryParams extends SpeakeasyBase {
    action: GetDetachInternetGatewayActionEnum;
    dryRun?: boolean;
    internetGatewayId: string;
    version: GetDetachInternetGatewayVersionEnum;
    vpcId: string;
}
export declare class GetDetachInternetGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDetachInternetGatewayRequest extends SpeakeasyBase {
    queryParams: GetDetachInternetGatewayQueryParams;
    headers: GetDetachInternetGatewayHeaders;
}
export declare class GetDetachInternetGatewayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
