import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateStreamingDistributionWithTags20181105QueryParams extends SpeakeasyBase {
    withTags: boolean;
}
export declare class CreateStreamingDistributionWithTags20181105Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateStreamingDistributionWithTags20181105Request extends SpeakeasyBase {
    queryParams: CreateStreamingDistributionWithTags20181105QueryParams;
    headers: CreateStreamingDistributionWithTags20181105Headers;
    request: Uint8Array;
}
export declare class CreateStreamingDistributionWithTags20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
