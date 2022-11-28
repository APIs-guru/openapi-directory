import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateStreamingDistributionWithTags20190326QueryParams extends SpeakeasyBase {
    withTags: boolean;
}
export declare class CreateStreamingDistributionWithTags20190326Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateStreamingDistributionWithTags20190326Request extends SpeakeasyBase {
    queryParams: CreateStreamingDistributionWithTags20190326QueryParams;
    headers: CreateStreamingDistributionWithTags20190326Headers;
    request: Uint8Array;
}
export declare class CreateStreamingDistributionWithTags20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
