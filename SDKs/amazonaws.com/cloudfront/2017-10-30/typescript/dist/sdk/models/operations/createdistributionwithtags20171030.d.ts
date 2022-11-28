import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateDistributionWithTags20171030QueryParams extends SpeakeasyBase {
    withTags: boolean;
}
export declare class CreateDistributionWithTags20171030Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDistributionWithTags20171030Request extends SpeakeasyBase {
    queryParams: CreateDistributionWithTags20171030QueryParams;
    headers: CreateDistributionWithTags20171030Headers;
    request: Uint8Array;
}
export declare class CreateDistributionWithTags20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
