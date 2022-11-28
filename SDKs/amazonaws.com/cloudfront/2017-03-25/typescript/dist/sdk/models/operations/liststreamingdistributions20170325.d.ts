import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListStreamingDistributions20170325QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListStreamingDistributions20170325Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListStreamingDistributions20170325Request extends SpeakeasyBase {
    queryParams: ListStreamingDistributions20170325QueryParams;
    headers: ListStreamingDistributions20170325Headers;
}
export declare class ListStreamingDistributions20170325Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
