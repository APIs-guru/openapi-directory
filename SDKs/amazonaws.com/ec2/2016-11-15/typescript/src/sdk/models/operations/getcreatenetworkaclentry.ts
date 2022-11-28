import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateNetworkAclEntryActionEnum {
    CreateNetworkAclEntry = "CreateNetworkAclEntry"
}


// GetCreateNetworkAclEntryIcmp
/** 
 * Describes the ICMP type and code.
**/
export class GetCreateNetworkAclEntryIcmp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=Code" })
  code?: number;

  @SpeakeasyMetadata({ data: "queryParam, name=Type" })
  type?: number;
}


// GetCreateNetworkAclEntryPortRange
/** 
 * Describes a range of ports.
**/
export class GetCreateNetworkAclEntryPortRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=From" })
  from?: number;

  @SpeakeasyMetadata({ data: "queryParam, name=To" })
  to?: number;
}

export enum GetCreateNetworkAclEntryRuleActionEnum {
    Allow = "allow",
    Deny = "deny"
}

export enum GetCreateNetworkAclEntryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCreateNetworkAclEntryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateNetworkAclEntryActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CidrBlock" })
  cidrBlock?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Egress" })
  egress: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Icmp" })
  icmp?: GetCreateNetworkAclEntryIcmp;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Ipv6CidrBlock" })
  ipv6CidrBlock?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkAclId" })
  networkAclId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PortRange" })
  portRange?: GetCreateNetworkAclEntryPortRange;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Protocol" })
  protocol: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleAction" })
  ruleAction: GetCreateNetworkAclEntryRuleActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RuleNumber" })
  ruleNumber: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateNetworkAclEntryVersionEnum;
}


export class GetCreateNetworkAclEntryHeaders extends SpeakeasyBase {
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


export class GetCreateNetworkAclEntryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateNetworkAclEntryQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreateNetworkAclEntryHeaders;
}


export class GetCreateNetworkAclEntryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
