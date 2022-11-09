import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyTransitGatewayPrefixListReferenceActionEnum {
    ModifyTransitGatewayPrefixListReference = "ModifyTransitGatewayPrefixListReference"
}
export declare enum GetModifyTransitGatewayPrefixListReferenceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyTransitGatewayPrefixListReferenceQueryParams extends SpeakeasyBase {
    action: GetModifyTransitGatewayPrefixListReferenceActionEnum;
    blackhole?: boolean;
    dryRun?: boolean;
    prefixListId: string;
    transitGatewayAttachmentId?: string;
    transitGatewayRouteTableId: string;
    version: GetModifyTransitGatewayPrefixListReferenceVersionEnum;
}
export declare class GetModifyTransitGatewayPrefixListReferenceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyTransitGatewayPrefixListReferenceRequest extends SpeakeasyBase {
    queryParams: GetModifyTransitGatewayPrefixListReferenceQueryParams;
    headers: GetModifyTransitGatewayPrefixListReferenceHeaders;
}
export declare class GetModifyTransitGatewayPrefixListReferenceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
