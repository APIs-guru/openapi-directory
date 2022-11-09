import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateNetworkAclEntryActionEnum {
    CreateNetworkAclEntry = "CreateNetworkAclEntry"
}


// GetCreateNetworkAclEntryIcmp
/** 
 * Describes the ICMP type and code.
**/
export class GetCreateNetworkAclEntryIcmp extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=Code" })
  code?: number;

  @Metadata({ data: "queryParam, name=Type" })
  type?: number;
}


// GetCreateNetworkAclEntryPortRange
/** 
 * Describes a range of ports.
**/
export class GetCreateNetworkAclEntryPortRange extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=From" })
  from?: number;

  @Metadata({ data: "queryParam, name=To" })
  to?: number;
}

export enum GetCreateNetworkAclEntryRuleActionEnum {
    Allow = "allow"
,    Deny = "deny"
}

export enum GetCreateNetworkAclEntryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCreateNetworkAclEntryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateNetworkAclEntryActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CidrBlock" })
  cidrBlock?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Egress" })
  egress: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Icmp" })
  icmp?: GetCreateNetworkAclEntryIcmp;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Ipv6CidrBlock" })
  ipv6CidrBlock?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkAclId" })
  networkAclId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PortRange" })
  portRange?: GetCreateNetworkAclEntryPortRange;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Protocol" })
  protocol: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RuleAction" })
  ruleAction: GetCreateNetworkAclEntryRuleActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RuleNumber" })
  ruleNumber: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateNetworkAclEntryVersionEnum;
}


export class GetCreateNetworkAclEntryHeaders extends SpeakeasyBase {
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


export class GetCreateNetworkAclEntryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateNetworkAclEntryQueryParams;

  @Metadata()
  headers: GetCreateNetworkAclEntryHeaders;
}


export class GetCreateNetworkAclEntryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
