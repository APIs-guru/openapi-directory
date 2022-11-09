import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteEgressOnlyInternetGatewayActionEnum {
    DeleteEgressOnlyInternetGateway = "DeleteEgressOnlyInternetGateway"
}
export declare enum GetDeleteEgressOnlyInternetGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteEgressOnlyInternetGatewayQueryParams extends SpeakeasyBase {
    action: GetDeleteEgressOnlyInternetGatewayActionEnum;
    dryRun?: boolean;
    egressOnlyInternetGatewayId: string;
    version: GetDeleteEgressOnlyInternetGatewayVersionEnum;
}
export declare class GetDeleteEgressOnlyInternetGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteEgressOnlyInternetGatewayRequest extends SpeakeasyBase {
    queryParams: GetDeleteEgressOnlyInternetGatewayQueryParams;
    headers: GetDeleteEgressOnlyInternetGatewayHeaders;
}
export declare class GetDeleteEgressOnlyInternetGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
