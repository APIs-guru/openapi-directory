import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateStreamingDistributionWithTags20170325QueryParams extends SpeakeasyBase {
    withTags: boolean;
}
export declare class CreateStreamingDistributionWithTags20170325Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateStreamingDistributionWithTags20170325Request extends SpeakeasyBase {
    queryParams: CreateStreamingDistributionWithTags20170325QueryParams;
    headers: CreateStreamingDistributionWithTags20170325Headers;
    request: Uint8Array;
}
export declare class CreateStreamingDistributionWithTags20170325Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
