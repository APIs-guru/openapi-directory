import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetEnableVgwRoutePropagationActionEnum {
    EnableVgwRoutePropagation = "EnableVgwRoutePropagation"
}
export declare enum GetEnableVgwRoutePropagationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetEnableVgwRoutePropagationQueryParams extends SpeakeasyBase {
    action: GetEnableVgwRoutePropagationActionEnum;
    dryRun?: boolean;
    gatewayId: string;
    routeTableId: string;
    version: GetEnableVgwRoutePropagationVersionEnum;
}
export declare class GetEnableVgwRoutePropagationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEnableVgwRoutePropagationRequest extends SpeakeasyBase {
    queryParams: GetEnableVgwRoutePropagationQueryParams;
    headers: GetEnableVgwRoutePropagationHeaders;
}
export declare class GetEnableVgwRoutePropagationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
