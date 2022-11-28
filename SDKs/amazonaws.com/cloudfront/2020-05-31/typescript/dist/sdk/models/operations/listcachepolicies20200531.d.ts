import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ListCachePolicies20200531TypeEnum {
    Managed = "managed",
    Custom = "custom"
}
export declare class ListCachePolicies20200531QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
    type?: ListCachePolicies20200531TypeEnum;
}
export declare class ListCachePolicies20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCachePolicies20200531Request extends SpeakeasyBase {
    queryParams: ListCachePolicies20200531QueryParams;
    headers: ListCachePolicies20200531Headers;
}
export declare class ListCachePolicies20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
