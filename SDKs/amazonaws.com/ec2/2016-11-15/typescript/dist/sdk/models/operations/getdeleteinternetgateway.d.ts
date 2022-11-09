import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteInternetGatewayActionEnum {
    DeleteInternetGateway = "DeleteInternetGateway"
}
export declare enum GetDeleteInternetGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteInternetGatewayQueryParams extends SpeakeasyBase {
    action: GetDeleteInternetGatewayActionEnum;
    dryRun?: boolean;
    internetGatewayId: string;
    version: GetDeleteInternetGatewayVersionEnum;
}
export declare class GetDeleteInternetGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteInternetGatewayRequest extends SpeakeasyBase {
    queryParams: GetDeleteInternetGatewayQueryParams;
    headers: GetDeleteInternetGatewayHeaders;
}
export declare class GetDeleteInternetGatewayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
