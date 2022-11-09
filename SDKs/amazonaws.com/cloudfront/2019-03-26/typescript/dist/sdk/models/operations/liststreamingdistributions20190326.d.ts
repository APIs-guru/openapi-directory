import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListStreamingDistributions20190326QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListStreamingDistributions20190326Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListStreamingDistributions20190326Request extends SpeakeasyBase {
    queryParams: ListStreamingDistributions20190326QueryParams;
    headers: ListStreamingDistributions20190326Headers;
}
export declare class ListStreamingDistributions20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
