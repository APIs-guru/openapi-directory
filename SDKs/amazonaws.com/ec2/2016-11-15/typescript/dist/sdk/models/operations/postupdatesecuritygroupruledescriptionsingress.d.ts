import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostUpdateSecurityGroupRuleDescriptionsIngressActionEnum {
    UpdateSecurityGroupRuleDescriptionsIngress = "UpdateSecurityGroupRuleDescriptionsIngress"
}
export declare enum PostUpdateSecurityGroupRuleDescriptionsIngressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostUpdateSecurityGroupRuleDescriptionsIngressQueryParams extends SpeakeasyBase {
    action: PostUpdateSecurityGroupRuleDescriptionsIngressActionEnum;
    version: PostUpdateSecurityGroupRuleDescriptionsIngressVersionEnum;
}
export declare class PostUpdateSecurityGroupRuleDescriptionsIngressHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostUpdateSecurityGroupRuleDescriptionsIngressRequest extends SpeakeasyBase {
    queryParams: PostUpdateSecurityGroupRuleDescriptionsIngressQueryParams;
    headers: PostUpdateSecurityGroupRuleDescriptionsIngressHeaders;
    request?: Uint8Array;
}
export declare class PostUpdateSecurityGroupRuleDescriptionsIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
