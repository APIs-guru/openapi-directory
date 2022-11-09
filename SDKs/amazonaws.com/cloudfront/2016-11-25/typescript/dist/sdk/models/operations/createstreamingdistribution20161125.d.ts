import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateStreamingDistribution20161125Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateStreamingDistribution20161125Request extends SpeakeasyBase {
    headers: CreateStreamingDistribution20161125Headers;
    request: Uint8Array;
}
export declare class CreateStreamingDistribution20161125Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
