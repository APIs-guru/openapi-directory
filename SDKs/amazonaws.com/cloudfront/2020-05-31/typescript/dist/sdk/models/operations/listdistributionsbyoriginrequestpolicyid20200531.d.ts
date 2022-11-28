import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListDistributionsByOriginRequestPolicyId20200531PathParams extends SpeakeasyBase {
    originRequestPolicyId: string;
}
export declare class ListDistributionsByOriginRequestPolicyId20200531QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
}
export declare class ListDistributionsByOriginRequestPolicyId20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDistributionsByOriginRequestPolicyId20200531Request extends SpeakeasyBase {
    pathParams: ListDistributionsByOriginRequestPolicyId20200531PathParams;
    queryParams: ListDistributionsByOriginRequestPolicyId20200531QueryParams;
    headers: ListDistributionsByOriginRequestPolicyId20200531Headers;
}
export declare class ListDistributionsByOriginRequestPolicyId20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
