import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateStreamingDistributionWithTags20161125QueryParams extends SpeakeasyBase {
    withTags: boolean;
}
export declare class CreateStreamingDistributionWithTags20161125Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateStreamingDistributionWithTags20161125Request extends SpeakeasyBase {
    queryParams: CreateStreamingDistributionWithTags20161125QueryParams;
    headers: CreateStreamingDistributionWithTags20161125Headers;
    request: Uint8Array;
}
export declare class CreateStreamingDistributionWithTags20161125Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
