import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteCustomerGatewayActionEnum {
    DeleteCustomerGateway = "DeleteCustomerGateway"
}
export declare enum GetDeleteCustomerGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteCustomerGatewayQueryParams extends SpeakeasyBase {
    action: GetDeleteCustomerGatewayActionEnum;
    customerGatewayId: string;
    dryRun?: boolean;
    version: GetDeleteCustomerGatewayVersionEnum;
}
export declare class GetDeleteCustomerGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteCustomerGatewayRequest extends SpeakeasyBase {
    queryParams: GetDeleteCustomerGatewayQueryParams;
    headers: GetDeleteCustomerGatewayHeaders;
}
export declare class GetDeleteCustomerGatewayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
