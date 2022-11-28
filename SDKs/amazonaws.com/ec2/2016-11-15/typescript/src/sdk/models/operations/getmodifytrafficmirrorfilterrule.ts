import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetModifyTrafficMirrorFilterRuleActionEnum {
    ModifyTrafficMirrorFilterRule = "ModifyTrafficMirrorFilterRule"
}


// GetModifyTrafficMirrorFilterRuleDestinationPortRange
/** 
 * Information about the Traffic Mirror filter rule port range.
**/
export class GetModifyTrafficMirrorFilterRuleDestinationPortRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=FromPort" })
  fromPort?: number;

  @SpeakeasyMetadata({ data: "queryParam, name=ToPort" })
  toPort?: number;
}

export enum GetModifyTrafficMirrorFilterRuleRuleActionEnum {
    Accept = "accept",
    Reject = "reject"
}


// GetModifyTrafficMirrorFilterRuleSourcePortRange
/** 
 * Information about the Traffic Mirror filter rule port range.
**/
export class GetModifyTrafficMirrorFilterRuleSourcePortRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=FromPort" })
  fromPort?: number;

  @SpeakeasyMetadata({ data: "queryParam, name=ToPort" })
  toPort?: number;
}

export enum GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum {
    Ingress = "ingress",
    Egress = "egress"
}

export enum GetModifyTrafficMirrorFilterRuleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyTrafficMirrorFilterRuleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyTrafficMirrorFilterRuleActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationCidrBlock" })
  destinationCidrBlock?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationPortRange" })
  destinationPortRange?: GetModifyTrafficMirrorFilterRuleDestinationPortRange;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Protocol" })
  protocol?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RemoveField" })
  removeField?: shared.TrafficMirrorFilterRuleFieldEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleAction" })
  ruleAction?: GetModifyTrafficMirrorFilterRuleRuleActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleNumber" })
  ruleNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceCidrBlock" })
  sourceCidrBlock?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourcePortRange" })
  sourcePortRange?: GetModifyTrafficMirrorFilterRuleSourcePortRange;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TrafficDirection" })
  trafficDirection?: GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TrafficMirrorFilterRuleId" })
  trafficMirrorFilterRuleId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyTrafficMirrorFilterRuleVersionEnum;
}


export class GetModifyTrafficMirrorFilterRuleHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetModifyTrafficMirrorFilterRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyTrafficMirrorFilterRuleQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyTrafficMirrorFilterRuleHeaders;
}


export class GetModifyTrafficMirrorFilterRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
