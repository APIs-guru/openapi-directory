import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetModifyTrafficMirrorFilterRuleActionEnum {
    ModifyTrafficMirrorFilterRule = "ModifyTrafficMirrorFilterRule"
}


// GetModifyTrafficMirrorFilterRuleDestinationPortRange
/** 
 * Information about the Traffic Mirror filter rule port range.
**/
export class GetModifyTrafficMirrorFilterRuleDestinationPortRange extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=FromPort" })
  fromPort?: number;

  @Metadata({ data: "queryParam, name=ToPort" })
  toPort?: number;
}

export enum GetModifyTrafficMirrorFilterRuleRuleActionEnum {
    Accept = "accept"
,    Reject = "reject"
}


// GetModifyTrafficMirrorFilterRuleSourcePortRange
/** 
 * Information about the Traffic Mirror filter rule port range.
**/
export class GetModifyTrafficMirrorFilterRuleSourcePortRange extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=FromPort" })
  fromPort?: number;

  @Metadata({ data: "queryParam, name=ToPort" })
  toPort?: number;
}

export enum GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum {
    Ingress = "ingress"
,    Egress = "egress"
}

export enum GetModifyTrafficMirrorFilterRuleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyTrafficMirrorFilterRuleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyTrafficMirrorFilterRuleActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DestinationCidrBlock" })
  destinationCidrBlock?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DestinationPortRange" })
  destinationPortRange?: GetModifyTrafficMirrorFilterRuleDestinationPortRange;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Protocol" })
  protocol?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RemoveField" })
  removeField?: shared.TrafficMirrorFilterRuleFieldEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=RuleAction" })
  ruleAction?: GetModifyTrafficMirrorFilterRuleRuleActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RuleNumber" })
  ruleNumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceCidrBlock" })
  sourceCidrBlock?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourcePortRange" })
  sourcePortRange?: GetModifyTrafficMirrorFilterRuleSourcePortRange;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TrafficDirection" })
  trafficDirection?: GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TrafficMirrorFilterRuleId" })
  trafficMirrorFilterRuleId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyTrafficMirrorFilterRuleVersionEnum;
}


export class GetModifyTrafficMirrorFilterRuleHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetModifyTrafficMirrorFilterRuleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyTrafficMirrorFilterRuleQueryParams;

  @Metadata()
  headers: GetModifyTrafficMirrorFilterRuleHeaders;
}


export class GetModifyTrafficMirrorFilterRuleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
