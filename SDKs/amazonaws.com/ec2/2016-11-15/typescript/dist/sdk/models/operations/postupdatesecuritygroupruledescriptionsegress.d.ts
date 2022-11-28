import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostUpdateSecurityGroupRuleDescriptionsEgressActionEnum {
    UpdateSecurityGroupRuleDescriptionsEgress = "UpdateSecurityGroupRuleDescriptionsEgress"
}
export declare enum PostUpdateSecurityGroupRuleDescriptionsEgressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostUpdateSecurityGroupRuleDescriptionsEgressQueryParams extends SpeakeasyBase {
    action: PostUpdateSecurityGroupRuleDescriptionsEgressActionEnum;
    version: PostUpdateSecurityGroupRuleDescriptionsEgressVersionEnum;
}
export declare class PostUpdateSecurityGroupRuleDescriptionsEgressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateSecurityGroupRuleDescriptionsEgressRequest extends SpeakeasyBase {
    queryParams: PostUpdateSecurityGroupRuleDescriptionsEgressQueryParams;
    headers: PostUpdateSecurityGroupRuleDescriptionsEgressHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateSecurityGroupRuleDescriptionsEgressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
