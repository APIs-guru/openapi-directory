import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAssociateTransitGatewayRouteTableActionEnum {
    AssociateTransitGatewayRouteTable = "AssociateTransitGatewayRouteTable"
}
export declare enum PostAssociateTransitGatewayRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostAssociateTransitGatewayRouteTableQueryParams extends SpeakeasyBase {
    action: PostAssociateTransitGatewayRouteTableActionEnum;
    version: PostAssociateTransitGatewayRouteTableVersionEnum;
}
export declare class PostAssociateTransitGatewayRouteTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAssociateTransitGatewayRouteTableRequest extends SpeakeasyBase {
    queryParams: PostAssociateTransitGatewayRouteTableQueryParams;
    headers: PostAssociateTransitGatewayRouteTableHeaders;
    request?: Uint8Array;
}
export declare class PostAssociateTransitGatewayRouteTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
