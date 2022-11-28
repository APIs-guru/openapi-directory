import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListStreamingDistributions20171030QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListStreamingDistributions20171030Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListStreamingDistributions20171030Request extends SpeakeasyBase {
    queryParams: ListStreamingDistributions20171030QueryParams;
    headers: ListStreamingDistributions20171030Headers;
}
export declare class ListStreamingDistributions20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
