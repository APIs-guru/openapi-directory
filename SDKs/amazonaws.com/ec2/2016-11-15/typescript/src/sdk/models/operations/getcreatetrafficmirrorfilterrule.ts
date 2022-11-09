import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateTrafficMirrorFilterRuleActionEnum {
    CreateTrafficMirrorFilterRule = "CreateTrafficMirrorFilterRule"
}


// GetCreateTrafficMirrorFilterRuleDestinationPortRange
/** 
 * Information about the Traffic Mirror filter rule port range.
**/
export class GetCreateTrafficMirrorFilterRuleDestinationPortRange extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=FromPort" })
  fromPort?: number;

  @Metadata({ data: "queryParam, name=ToPort" })
  toPort?: number;
}

export enum GetCreateTrafficMirrorFilterRuleRuleActionEnum {
    Accept = "accept"
,    Reject = "reject"
}


// GetCreateTrafficMirrorFilterRuleSourcePortRange
/** 
 * Information about the Traffic Mirror filter rule port range.
**/
export class GetCreateTrafficMirrorFilterRuleSourcePortRange extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=FromPort" })
  fromPort?: number;

  @Metadata({ data: "queryParam, name=ToPort" })
  toPort?: number;
}

export enum GetCreateTrafficMirrorFilterRuleTrafficDirectionEnum {
    Ingress = "ingress"
,    Egress = "egress"
}

export enum GetCreateTrafficMirrorFilterRuleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCreateTrafficMirrorFilterRuleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateTrafficMirrorFilterRuleActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DestinationCidrBlock" })
  destinationCidrBlock: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DestinationPortRange" })
  destinationPortRange?: GetCreateTrafficMirrorFilterRuleDestinationPortRange;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Protocol" })
  protocol?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RuleAction" })
  ruleAction: GetCreateTrafficMirrorFilterRuleRuleActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RuleNumber" })
  ruleNumber: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceCidrBlock" })
  sourceCidrBlock: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourcePortRange" })
  sourcePortRange?: GetCreateTrafficMirrorFilterRuleSourcePortRange;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TrafficDirection" })
  trafficDirection: GetCreateTrafficMirrorFilterRuleTrafficDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TrafficMirrorFilterId" })
  trafficMirrorFilterId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateTrafficMirrorFilterRuleVersionEnum;
}


export class GetCreateTrafficMirrorFilterRuleHeaders extends SpeakeasyBase {
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


export class GetCreateTrafficMirrorFilterRuleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateTrafficMirrorFilterRuleQueryParams;

  @Metadata()
  headers: GetCreateTrafficMirrorFilterRuleHeaders;
}


export class GetCreateTrafficMirrorFilterRuleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
