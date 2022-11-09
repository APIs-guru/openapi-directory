import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetSetInstanceHealthActionEnum {
    SetInstanceHealth = "SetInstanceHealth"
}
export declare enum GetSetInstanceHealthVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GetSetInstanceHealthQueryParams extends SpeakeasyBase {
    action: GetSetInstanceHealthActionEnum;
    healthStatus: string;
    instanceId: string;
    shouldRespectGracePeriod?: boolean;
    version: GetSetInstanceHealthVersionEnum;
}
export declare class GetSetInstanceHealthHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSetInstanceHealthRequest extends SpeakeasyBase {
    queryParams: GetSetInstanceHealthQueryParams;
    headers: GetSetInstanceHealthHeaders;
}
export declare class GetSetInstanceHealthResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
