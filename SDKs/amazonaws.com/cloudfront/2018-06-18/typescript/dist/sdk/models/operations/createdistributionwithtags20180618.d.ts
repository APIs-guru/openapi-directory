import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateDistributionWithTags20180618QueryParams extends SpeakeasyBase {
    withTags: boolean;
}
export declare class CreateDistributionWithTags20180618Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDistributionWithTags20180618Request extends SpeakeasyBase {
    queryParams: CreateDistributionWithTags20180618QueryParams;
    headers: CreateDistributionWithTags20180618Headers;
    request: Uint8Array;
}
export declare class CreateDistributionWithTags20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
