import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetReplaceNetworkAclEntryActionEnum {
    ReplaceNetworkAclEntry = "ReplaceNetworkAclEntry"
}


// GetReplaceNetworkAclEntryIcmp
/** 
 * Describes the ICMP type and code.
**/
export class GetReplaceNetworkAclEntryIcmp extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=Code" })
  code?: number;

  @Metadata({ data: "queryParam, name=Type" })
  type?: number;
}


// GetReplaceNetworkAclEntryPortRange
/** 
 * Describes a range of ports.
**/
export class GetReplaceNetworkAclEntryPortRange extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=From" })
  from?: number;

  @Metadata({ data: "queryParam, name=To" })
  to?: number;
}

export enum GetReplaceNetworkAclEntryRuleActionEnum {
    Allow = "allow"
,    Deny = "deny"
}

export enum GetReplaceNetworkAclEntryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetReplaceNetworkAclEntryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetReplaceNetworkAclEntryActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CidrBlock" })
  cidrBlock?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Egress" })
  egress: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Icmp" })
  icmp?: GetReplaceNetworkAclEntryIcmp;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Ipv6CidrBlock" })
  ipv6CidrBlock?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkAclId" })
  networkAclId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PortRange" })
  portRange?: GetReplaceNetworkAclEntryPortRange;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Protocol" })
  protocol: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RuleAction" })
  ruleAction: GetReplaceNetworkAclEntryRuleActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RuleNumber" })
  ruleNumber: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetReplaceNetworkAclEntryVersionEnum;
}


export class GetReplaceNetworkAclEntryHeaders extends SpeakeasyBase {
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


export class GetReplaceNetworkAclEntryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReplaceNetworkAclEntryQueryParams;

  @Metadata()
  headers: GetReplaceNetworkAclEntryHeaders;
}


export class GetReplaceNetworkAclEntryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
