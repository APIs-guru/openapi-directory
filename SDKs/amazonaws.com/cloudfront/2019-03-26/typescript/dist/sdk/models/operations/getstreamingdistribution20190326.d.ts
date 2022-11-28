import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStreamingDistribution20190326PathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetStreamingDistribution20190326Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStreamingDistribution20190326Request extends SpeakeasyBase {
    pathParams: GetStreamingDistribution20190326PathParams;
    headers: GetStreamingDistribution20190326Headers;
}
export declare class GetStreamingDistribution20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
