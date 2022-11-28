import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyTransitGatewayPrefixListReferenceActionEnum {
    ModifyTransitGatewayPrefixListReference = "ModifyTransitGatewayPrefixListReference"
}
export declare enum PostModifyTransitGatewayPrefixListReferenceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostModifyTransitGatewayPrefixListReferenceQueryParams extends SpeakeasyBase {
    action: PostModifyTransitGatewayPrefixListReferenceActionEnum;
    version: PostModifyTransitGatewayPrefixListReferenceVersionEnum;
}
export declare class PostModifyTransitGatewayPrefixListReferenceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyTransitGatewayPrefixListReferenceRequest extends SpeakeasyBase {
    queryParams: PostModifyTransitGatewayPrefixListReferenceQueryParams;
    headers: PostModifyTransitGatewayPrefixListReferenceHeaders;
    request?: Uint8Array;
}
export declare class PostModifyTransitGatewayPrefixListReferenceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
