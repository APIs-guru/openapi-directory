import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetReplaceNetworkAclEntryActionEnum {
    ReplaceNetworkAclEntry = "ReplaceNetworkAclEntry"
}
/**
 * Describes the ICMP type and code.
**/
export declare class GetReplaceNetworkAclEntryIcmp extends SpeakeasyBase {
    code?: number;
    type?: number;
}
/**
 * Describes a range of ports.
**/
export declare class GetReplaceNetworkAclEntryPortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
export declare enum GetReplaceNetworkAclEntryRuleActionEnum {
    Allow = "allow",
    Deny = "deny"
}
export declare enum GetReplaceNetworkAclEntryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetReplaceNetworkAclEntryQueryParams extends SpeakeasyBase {
    action: GetReplaceNetworkAclEntryActionEnum;
    cidrBlock?: string;
    dryRun?: boolean;
    egress: boolean;
    icmp?: GetReplaceNetworkAclEntryIcmp;
    ipv6CidrBlock?: string;
    networkAclId: string;
    portRange?: GetReplaceNetworkAclEntryPortRange;
    protocol: string;
    ruleAction: GetReplaceNetworkAclEntryRuleActionEnum;
    ruleNumber: number;
    version: GetReplaceNetworkAclEntryVersionEnum;
}
export declare class GetReplaceNetworkAclEntryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetReplaceNetworkAclEntryRequest extends SpeakeasyBase {
    queryParams: GetReplaceNetworkAclEntryQueryParams;
    headers: GetReplaceNetworkAclEntryHeaders;
}
export declare class GetReplaceNetworkAclEntryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
