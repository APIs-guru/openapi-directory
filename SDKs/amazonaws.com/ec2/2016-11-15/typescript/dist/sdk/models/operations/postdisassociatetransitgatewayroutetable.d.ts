import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDisassociateTransitGatewayRouteTableActionEnum {
    DisassociateTransitGatewayRouteTable = "DisassociateTransitGatewayRouteTable"
}
export declare enum PostDisassociateTransitGatewayRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDisassociateTransitGatewayRouteTableQueryParams extends SpeakeasyBase {
    action: PostDisassociateTransitGatewayRouteTableActionEnum;
    version: PostDisassociateTransitGatewayRouteTableVersionEnum;
}
export declare class PostDisassociateTransitGatewayRouteTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisassociateTransitGatewayRouteTableRequest extends SpeakeasyBase {
    queryParams: PostDisassociateTransitGatewayRouteTableQueryParams;
    headers: PostDisassociateTransitGatewayRouteTableHeaders;
    request?: Uint8Array;
}
export declare class PostDisassociateTransitGatewayRouteTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
