import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateDistributionWithTags20181105QueryParams extends SpeakeasyBase {
    withTags: boolean;
}
export declare class CreateDistributionWithTags20181105Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDistributionWithTags20181105Request extends SpeakeasyBase {
    queryParams: CreateDistributionWithTags20181105QueryParams;
    headers: CreateDistributionWithTags20181105Headers;
    request: Uint8Array;
}
export declare class CreateDistributionWithTags20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
