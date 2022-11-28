import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteRouteTableActionEnum {
    DeleteRouteTable = "DeleteRouteTable"
}
export declare enum GetDeleteRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteRouteTableQueryParams extends SpeakeasyBase {
    action: GetDeleteRouteTableActionEnum;
    dryRun?: boolean;
    routeTableId: string;
    version: GetDeleteRouteTableVersionEnum;
}
export declare class GetDeleteRouteTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteRouteTableRequest extends SpeakeasyBase {
    queryParams: GetDeleteRouteTableQueryParams;
    headers: GetDeleteRouteTableHeaders;
}
export declare class GetDeleteRouteTableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
