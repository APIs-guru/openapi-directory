import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateTrafficMirrorFilterRuleActionEnum {
    CreateTrafficMirrorFilterRule = "CreateTrafficMirrorFilterRule"
}


// GetCreateTrafficMirrorFilterRuleDestinationPortRange
/** 
 * Information about the Traffic Mirror filter rule port range.
**/
export class GetCreateTrafficMirrorFilterRuleDestinationPortRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=FromPort" })
  fromPort?: number;

  @SpeakeasyMetadata({ data: "queryParam, name=ToPort" })
  toPort?: number;
}

export enum GetCreateTrafficMirrorFilterRuleRuleActionEnum {
    Accept = "accept",
    Reject = "reject"
}


// GetCreateTrafficMirrorFilterRuleSourcePortRange
/** 
 * Information about the Traffic Mirror filter rule port range.
**/
export class GetCreateTrafficMirrorFilterRuleSourcePortRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=FromPort" })
  fromPort?: number;

  @SpeakeasyMetadata({ data: "queryParam, name=ToPort" })
  toPort?: number;
}

export enum GetCreateTrafficMirrorFilterRuleTrafficDirectionEnum {
    Ingress = "ingress",
    Egress = "egress"
}

export enum GetCreateTrafficMirrorFilterRuleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCreateTrafficMirrorFilterRuleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateTrafficMirrorFilterRuleActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationCidrBlock" })
  destinationCidrBlock: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationPortRange" })
  destinationPortRange?: GetCreateTrafficMirrorFilterRuleDestinationPortRange;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Protocol" })
  protocol?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleAction" })
  ruleAction: GetCreateTrafficMirrorFilterRuleRuleActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleNumber" })
  ruleNumber: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceCidrBlock" })
  sourceCidrBlock: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourcePortRange" })
  sourcePortRange?: GetCreateTrafficMirrorFilterRuleSourcePortRange;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TrafficDirection" })
  trafficDirection: GetCreateTrafficMirrorFilterRuleTrafficDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TrafficMirrorFilterId" })
  trafficMirrorFilterId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateTrafficMirrorFilterRuleVersionEnum;
}


export class GetCreateTrafficMirrorFilterRuleHeaders extends SpeakeasyBase {
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


export class GetCreateTrafficMirrorFilterRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateTrafficMirrorFilterRuleQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreateTrafficMirrorFilterRuleHeaders;
}


export class GetCreateTrafficMirrorFilterRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
