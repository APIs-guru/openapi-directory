import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteRouteActionEnum {
    DeleteRoute = "DeleteRoute"
}
export declare enum GetDeleteRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteRouteQueryParams extends SpeakeasyBase {
    action: GetDeleteRouteActionEnum;
    destinationCidrBlock?: string;
    destinationIpv6CidrBlock?: string;
    destinationPrefixListId?: string;
    dryRun?: boolean;
    routeTableId: string;
    version: GetDeleteRouteVersionEnum;
}
export declare class GetDeleteRouteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteRouteRequest extends SpeakeasyBase {
    queryParams: GetDeleteRouteQueryParams;
    headers: GetDeleteRouteHeaders;
}
export declare class GetDeleteRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
