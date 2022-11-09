import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostExportTransitGatewayRoutesActionEnum {
    ExportTransitGatewayRoutes = "ExportTransitGatewayRoutes"
}
export declare enum PostExportTransitGatewayRoutesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostExportTransitGatewayRoutesQueryParams extends SpeakeasyBase {
    action: PostExportTransitGatewayRoutesActionEnum;
    version: PostExportTransitGatewayRoutesVersionEnum;
}
export declare class PostExportTransitGatewayRoutesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostExportTransitGatewayRoutesRequest extends SpeakeasyBase {
    queryParams: PostExportTransitGatewayRoutesQueryParams;
    headers: PostExportTransitGatewayRoutesHeaders;
    request?: Uint8Array;
}
export declare class PostExportTransitGatewayRoutesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
