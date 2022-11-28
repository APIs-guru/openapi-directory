import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListStreamingDistributions20181105QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListStreamingDistributions20181105Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListStreamingDistributions20181105Request extends SpeakeasyBase {
    queryParams: ListStreamingDistributions20181105QueryParams;
    headers: ListStreamingDistributions20181105Headers;
}
export declare class ListStreamingDistributions20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
