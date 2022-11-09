import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetModifyTrafficMirrorFilterRuleActionEnum {
    ModifyTrafficMirrorFilterRule = "ModifyTrafficMirrorFilterRule"
}
/**
 * Information about the Traffic Mirror filter rule port range.
**/
export declare class GetModifyTrafficMirrorFilterRuleDestinationPortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
export declare enum GetModifyTrafficMirrorFilterRuleRuleActionEnum {
    Accept = "accept",
    Reject = "reject"
}
/**
 * Information about the Traffic Mirror filter rule port range.
**/
export declare class GetModifyTrafficMirrorFilterRuleSourcePortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
export declare enum GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum {
    Ingress = "ingress",
    Egress = "egress"
}
export declare enum GetModifyTrafficMirrorFilterRuleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetModifyTrafficMirrorFilterRuleQueryParams extends SpeakeasyBase {
    action: GetModifyTrafficMirrorFilterRuleActionEnum;
    description?: string;
    destinationCidrBlock?: string;
    destinationPortRange?: GetModifyTrafficMirrorFilterRuleDestinationPortRange;
    dryRun?: boolean;
    protocol?: number;
    removeField?: shared.TrafficMirrorFilterRuleFieldEnum[];
    ruleAction?: GetModifyTrafficMirrorFilterRuleRuleActionEnum;
    ruleNumber?: number;
    sourceCidrBlock?: string;
    sourcePortRange?: GetModifyTrafficMirrorFilterRuleSourcePortRange;
    trafficDirection?: GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum;
    trafficMirrorFilterRuleId: string;
    version: GetModifyTrafficMirrorFilterRuleVersionEnum;
}
export declare class GetModifyTrafficMirrorFilterRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyTrafficMirrorFilterRuleRequest extends SpeakeasyBase {
    queryParams: GetModifyTrafficMirrorFilterRuleQueryParams;
    headers: GetModifyTrafficMirrorFilterRuleHeaders;
}
export declare class GetModifyTrafficMirrorFilterRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
