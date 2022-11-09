import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyTransitGatewayActionEnum {
    ModifyTransitGateway = "ModifyTransitGateway"
}
export declare enum PostModifyTransitGatewayVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyTransitGatewayQueryParams extends SpeakeasyBase {
    action: PostModifyTransitGatewayActionEnum;
    version: PostModifyTransitGatewayVersionEnum;
}
export declare class PostModifyTransitGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyTransitGatewayRequest extends SpeakeasyBase {
    queryParams: PostModifyTransitGatewayQueryParams;
    headers: PostModifyTransitGatewayHeaders;
    request?: Uint8Array;
}
export declare class PostModifyTransitGatewayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
