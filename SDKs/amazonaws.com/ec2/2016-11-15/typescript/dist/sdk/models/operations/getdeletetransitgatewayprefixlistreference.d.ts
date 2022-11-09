import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteTransitGatewayPrefixListReferenceActionEnum {
    DeleteTransitGatewayPrefixListReference = "DeleteTransitGatewayPrefixListReference"
}
export declare enum GetDeleteTransitGatewayPrefixListReferenceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteTransitGatewayPrefixListReferenceQueryParams extends SpeakeasyBase {
    action: GetDeleteTransitGatewayPrefixListReferenceActionEnum;
    dryRun?: boolean;
    prefixListId: string;
    transitGatewayRouteTableId: string;
    version: GetDeleteTransitGatewayPrefixListReferenceVersionEnum;
}
export declare class GetDeleteTransitGatewayPrefixListReferenceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteTransitGatewayPrefixListReferenceRequest extends SpeakeasyBase {
    queryParams: GetDeleteTransitGatewayPrefixListReferenceQueryParams;
    headers: GetDeleteTransitGatewayPrefixListReferenceHeaders;
}
export declare class GetDeleteTransitGatewayPrefixListReferenceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
