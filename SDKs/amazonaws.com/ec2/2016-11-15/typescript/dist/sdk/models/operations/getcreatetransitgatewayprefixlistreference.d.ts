import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCreateTransitGatewayPrefixListReferenceActionEnum {
    CreateTransitGatewayPrefixListReference = "CreateTransitGatewayPrefixListReference"
}
export declare enum GetCreateTransitGatewayPrefixListReferenceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCreateTransitGatewayPrefixListReferenceQueryParams extends SpeakeasyBase {
    action: GetCreateTransitGatewayPrefixListReferenceActionEnum;
    blackhole?: boolean;
    dryRun?: boolean;
    prefixListId: string;
    transitGatewayAttachmentId?: string;
    transitGatewayRouteTableId: string;
    version: GetCreateTransitGatewayPrefixListReferenceVersionEnum;
}
export declare class GetCreateTransitGatewayPrefixListReferenceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateTransitGatewayPrefixListReferenceRequest extends SpeakeasyBase {
    queryParams: GetCreateTransitGatewayPrefixListReferenceQueryParams;
    headers: GetCreateTransitGatewayPrefixListReferenceHeaders;
}
export declare class GetCreateTransitGatewayPrefixListReferenceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
