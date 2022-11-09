import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateStreamingDistribution20190326Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateStreamingDistribution20190326Request extends SpeakeasyBase {
    headers: CreateStreamingDistribution20190326Headers;
    request: Uint8Array;
}
export declare class CreateStreamingDistribution20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
