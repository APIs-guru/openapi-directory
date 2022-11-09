import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteTransitGatewayPrefixListReferenceActionEnum {
    DeleteTransitGatewayPrefixListReference = "DeleteTransitGatewayPrefixListReference"
}
export declare enum PostDeleteTransitGatewayPrefixListReferenceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteTransitGatewayPrefixListReferenceQueryParams extends SpeakeasyBase {
    action: PostDeleteTransitGatewayPrefixListReferenceActionEnum;
    version: PostDeleteTransitGatewayPrefixListReferenceVersionEnum;
}
export declare class PostDeleteTransitGatewayPrefixListReferenceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteTransitGatewayPrefixListReferenceRequest extends SpeakeasyBase {
    queryParams: PostDeleteTransitGatewayPrefixListReferenceQueryParams;
    headers: PostDeleteTransitGatewayPrefixListReferenceHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteTransitGatewayPrefixListReferenceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
