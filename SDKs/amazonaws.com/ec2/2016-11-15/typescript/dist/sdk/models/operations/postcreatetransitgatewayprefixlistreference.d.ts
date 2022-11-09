import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateTransitGatewayPrefixListReferenceActionEnum {
    CreateTransitGatewayPrefixListReference = "CreateTransitGatewayPrefixListReference"
}
export declare enum PostCreateTransitGatewayPrefixListReferenceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostCreateTransitGatewayPrefixListReferenceQueryParams extends SpeakeasyBase {
    action: PostCreateTransitGatewayPrefixListReferenceActionEnum;
    version: PostCreateTransitGatewayPrefixListReferenceVersionEnum;
}
export declare class PostCreateTransitGatewayPrefixListReferenceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateTransitGatewayPrefixListReferenceRequest extends SpeakeasyBase {
    queryParams: PostCreateTransitGatewayPrefixListReferenceQueryParams;
    headers: PostCreateTransitGatewayPrefixListReferenceHeaders;
    request?: Uint8Array;
}
export declare class PostCreateTransitGatewayPrefixListReferenceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
