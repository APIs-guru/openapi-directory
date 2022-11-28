import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateNetworkAclEntryActionEnum {
    CreateNetworkAclEntry = "CreateNetworkAclEntry"
}
/**
 * Describes the ICMP type and code.
**/
export declare class GetCreateNetworkAclEntryIcmp extends SpeakeasyBase {
    code?: number;
    type?: number;
}
/**
 * Describes a range of ports.
**/
export declare class GetCreateNetworkAclEntryPortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
export declare enum GetCreateNetworkAclEntryRuleActionEnum {
    Allow = "allow",
    Deny = "deny"
}
export declare enum GetCreateNetworkAclEntryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCreateNetworkAclEntryQueryParams extends SpeakeasyBase {
    action: GetCreateNetworkAclEntryActionEnum;
    cidrBlock?: string;
    dryRun?: boolean;
    egress: boolean;
    icmp?: GetCreateNetworkAclEntryIcmp;
    ipv6CidrBlock?: string;
    networkAclId: string;
    portRange?: GetCreateNetworkAclEntryPortRange;
    protocol: string;
    ruleAction: GetCreateNetworkAclEntryRuleActionEnum;
    ruleNumber: number;
    version: GetCreateNetworkAclEntryVersionEnum;
}
export declare class GetCreateNetworkAclEntryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateNetworkAclEntryRequest extends SpeakeasyBase {
    queryParams: GetCreateNetworkAclEntryQueryParams;
    headers: GetCreateNetworkAclEntryHeaders;
}
export declare class GetCreateNetworkAclEntryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
