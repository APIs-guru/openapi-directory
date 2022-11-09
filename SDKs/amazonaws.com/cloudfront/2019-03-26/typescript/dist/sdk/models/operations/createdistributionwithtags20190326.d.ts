import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateDistributionWithTags20190326QueryParams extends SpeakeasyBase {
    withTags: boolean;
}
export declare class CreateDistributionWithTags20190326Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDistributionWithTags20190326Request extends SpeakeasyBase {
    queryParams: CreateDistributionWithTags20190326QueryParams;
    headers: CreateDistributionWithTags20190326Headers;
    request: Uint8Array;
}
export declare class CreateDistributionWithTags20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
