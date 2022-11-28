import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateTrafficMirrorFilterRuleActionEnum {
    CreateTrafficMirrorFilterRule = "CreateTrafficMirrorFilterRule"
}
/**
 * Information about the Traffic Mirror filter rule port range.
**/
export declare class GetCreateTrafficMirrorFilterRuleDestinationPortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
export declare enum GetCreateTrafficMirrorFilterRuleRuleActionEnum {
    Accept = "accept",
    Reject = "reject"
}
/**
 * Information about the Traffic Mirror filter rule port range.
**/
export declare class GetCreateTrafficMirrorFilterRuleSourcePortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
export declare enum GetCreateTrafficMirrorFilterRuleTrafficDirectionEnum {
    Ingress = "ingress",
    Egress = "egress"
}
export declare enum GetCreateTrafficMirrorFilterRuleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetCreateTrafficMirrorFilterRuleQueryParams extends SpeakeasyBase {
    action: GetCreateTrafficMirrorFilterRuleActionEnum;
    clientToken?: string;
    description?: string;
    destinationCidrBlock: string;
    destinationPortRange?: GetCreateTrafficMirrorFilterRuleDestinationPortRange;
    dryRun?: boolean;
    protocol?: number;
    ruleAction: GetCreateTrafficMirrorFilterRuleRuleActionEnum;
    ruleNumber: number;
    sourceCidrBlock: string;
    sourcePortRange?: GetCreateTrafficMirrorFilterRuleSourcePortRange;
    trafficDirection: GetCreateTrafficMirrorFilterRuleTrafficDirectionEnum;
    trafficMirrorFilterId: string;
    version: GetCreateTrafficMirrorFilterRuleVersionEnum;
}
export declare class GetCreateTrafficMirrorFilterRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateTrafficMirrorFilterRuleRequest extends SpeakeasyBase {
    queryParams: GetCreateTrafficMirrorFilterRuleQueryParams;
    headers: GetCreateTrafficMirrorFilterRuleHeaders;
}
export declare class GetCreateTrafficMirrorFilterRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
