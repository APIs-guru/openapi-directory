import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListDistributions20181105QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListDistributions20181105Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDistributions20181105Request extends SpeakeasyBase {
    queryParams: ListDistributions20181105QueryParams;
    headers: ListDistributions20181105Headers;
}
export declare class ListDistributions20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
