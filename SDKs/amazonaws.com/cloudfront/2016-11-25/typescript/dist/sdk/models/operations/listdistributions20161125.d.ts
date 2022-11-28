import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListDistributions20161125QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListDistributions20161125Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDistributions20161125Request extends SpeakeasyBase {
    queryParams: ListDistributions20161125QueryParams;
    headers: ListDistributions20161125Headers;
}
export declare class ListDistributions20161125Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
