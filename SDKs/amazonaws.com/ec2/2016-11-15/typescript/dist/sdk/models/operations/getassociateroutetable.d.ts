import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAssociateRouteTableActionEnum {
    AssociateRouteTable = "AssociateRouteTable"
}
export declare enum GetAssociateRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetAssociateRouteTableQueryParams extends SpeakeasyBase {
    action: GetAssociateRouteTableActionEnum;
    dryRun?: boolean;
    gatewayId?: string;
    routeTableId: string;
    subnetId?: string;
    version: GetAssociateRouteTableVersionEnum;
}
export declare class GetAssociateRouteTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssociateRouteTableRequest extends SpeakeasyBase {
    queryParams: GetAssociateRouteTableQueryParams;
    headers: GetAssociateRouteTableHeaders;
}
export declare class GetAssociateRouteTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
