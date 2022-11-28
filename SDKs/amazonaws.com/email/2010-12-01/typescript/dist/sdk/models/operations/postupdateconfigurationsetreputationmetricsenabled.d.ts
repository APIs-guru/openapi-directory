import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUpdateConfigurationSetReputationMetricsEnabledActionEnum {
    UpdateConfigurationSetReputationMetricsEnabled = "UpdateConfigurationSetReputationMetricsEnabled"
}
export declare enum PostUpdateConfigurationSetReputationMetricsEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class PostUpdateConfigurationSetReputationMetricsEnabledQueryParams extends SpeakeasyBase {
    action: PostUpdateConfigurationSetReputationMetricsEnabledActionEnum;
    version: PostUpdateConfigurationSetReputationMetricsEnabledVersionEnum;
}
export declare class PostUpdateConfigurationSetReputationMetricsEnabledHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateConfigurationSetReputationMetricsEnabledRequest extends SpeakeasyBase {
    queryParams: PostUpdateConfigurationSetReputationMetricsEnabledQueryParams;
    headers: PostUpdateConfigurationSetReputationMetricsEnabledHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateConfigurationSetReputationMetricsEnabledResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
