import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDisableVgwRoutePropagationActionEnum {
    DisableVgwRoutePropagation = "DisableVgwRoutePropagation"
}
export declare enum GetDisableVgwRoutePropagationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDisableVgwRoutePropagationQueryParams extends SpeakeasyBase {
    action: GetDisableVgwRoutePropagationActionEnum;
    dryRun?: boolean;
    gatewayId: string;
    routeTableId: string;
    version: GetDisableVgwRoutePropagationVersionEnum;
}
export declare class GetDisableVgwRoutePropagationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisableVgwRoutePropagationRequest extends SpeakeasyBase {
    queryParams: GetDisableVgwRoutePropagationQueryParams;
    headers: GetDisableVgwRoutePropagationHeaders;
}
export declare class GetDisableVgwRoutePropagationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
