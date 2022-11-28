import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListDistributions20190326QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListDistributions20190326Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDistributions20190326Request extends SpeakeasyBase {
    queryParams: ListDistributions20190326QueryParams;
    headers: ListDistributions20190326Headers;
}
export declare class ListDistributions20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
