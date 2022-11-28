import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetReplaceNetworkAclEntryActionEnum {
    ReplaceNetworkAclEntry = "ReplaceNetworkAclEntry"
}


// GetReplaceNetworkAclEntryIcmp
/** 
 * Describes the ICMP type and code.
**/
export class GetReplaceNetworkAclEntryIcmp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=Code" })
  code?: number;

  @SpeakeasyMetadata({ data: "queryParam, name=Type" })
  type?: number;
}


// GetReplaceNetworkAclEntryPortRange
/** 
 * Describes a range of ports.
**/
export class GetReplaceNetworkAclEntryPortRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=From" })
  from?: number;

  @SpeakeasyMetadata({ data: "queryParam, name=To" })
  to?: number;
}

export enum GetReplaceNetworkAclEntryRuleActionEnum {
    Allow = "allow",
    Deny = "deny"
}

export enum GetReplaceNetworkAclEntryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetReplaceNetworkAclEntryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetReplaceNetworkAclEntryActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CidrBlock" })
  cidrBlock?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Egress" })
  egress: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Icmp" })
  icmp?: GetReplaceNetworkAclEntryIcmp;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv6CidrBlock" })
  ipv6CidrBlock?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkAclId" })
  networkAclId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PortRange" })
  portRange?: GetReplaceNetworkAclEntryPortRange;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Protocol" })
  protocol: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleAction" })
  ruleAction: GetReplaceNetworkAclEntryRuleActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleNumber" })
  ruleNumber: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetReplaceNetworkAclEntryVersionEnum;
}


export class GetReplaceNetworkAclEntryHeaders extends SpeakeasyBase {
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


export class GetReplaceNetworkAclEntryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReplaceNetworkAclEntryQueryParams;

  @SpeakeasyMetadata()
  headers: GetReplaceNetworkAclEntryHeaders;
}


export class GetReplaceNetworkAclEntryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
