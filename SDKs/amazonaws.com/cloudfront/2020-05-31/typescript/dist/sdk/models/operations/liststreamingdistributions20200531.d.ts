import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListStreamingDistributions20200531QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListStreamingDistributions20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListStreamingDistributions20200531Request extends SpeakeasyBase {
    queryParams: ListStreamingDistributions20200531QueryParams;
    headers: ListStreamingDistributions20200531Headers;
}
export declare class ListStreamingDistributions20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
