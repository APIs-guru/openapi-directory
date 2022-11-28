import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAttachInternetGatewayActionEnum {
    AttachInternetGateway = "AttachInternetGateway"
}
export declare enum GetAttachInternetGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAttachInternetGatewayQueryParams extends SpeakeasyBase {
    action: GetAttachInternetGatewayActionEnum;
    dryRun?: boolean;
    internetGatewayId: string;
    version: GetAttachInternetGatewayVersionEnum;
    vpcId: string;
}
export declare class GetAttachInternetGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAttachInternetGatewayRequest extends SpeakeasyBase {
    queryParams: GetAttachInternetGatewayQueryParams;
    headers: GetAttachInternetGatewayHeaders;
}
export declare class GetAttachInternetGatewayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
