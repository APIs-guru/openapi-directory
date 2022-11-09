import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateStreamingDistributionWithTags20180618QueryParams extends SpeakeasyBase {
    withTags: boolean;
}
export declare class CreateStreamingDistributionWithTags20180618Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateStreamingDistributionWithTags20180618Request extends SpeakeasyBase {
    queryParams: CreateStreamingDistributionWithTags20180618QueryParams;
    headers: CreateStreamingDistributionWithTags20180618Headers;
    request: Uint8Array;
}
export declare class CreateStreamingDistributionWithTags20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
