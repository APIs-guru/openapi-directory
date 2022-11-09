import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ListOriginRequestPolicies20200531TypeEnum {
    Managed = "managed",
    Custom = "custom"
}
export declare class ListOriginRequestPolicies20200531QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
    type?: ListOriginRequestPolicies20200531TypeEnum;
}
export declare class ListOriginRequestPolicies20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListOriginRequestPolicies20200531Request extends SpeakeasyBase {
    queryParams: ListOriginRequestPolicies20200531QueryParams;
    headers: ListOriginRequestPolicies20200531Headers;
}
export declare class ListOriginRequestPolicies20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
