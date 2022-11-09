import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateStreamingDistributionWithTags20171030QueryParams extends SpeakeasyBase {
    withTags: boolean;
}
export declare class CreateStreamingDistributionWithTags20171030Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateStreamingDistributionWithTags20171030Request extends SpeakeasyBase {
    queryParams: CreateStreamingDistributionWithTags20171030QueryParams;
    headers: CreateStreamingDistributionWithTags20171030Headers;
    request: Uint8Array;
}
export declare class CreateStreamingDistributionWithTags20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
