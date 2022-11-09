import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions
/** 
 * The VPC peering connection options.
**/
export class GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=AllowDnsResolutionFromRemoteVpc" })
  allowDnsResolutionFromRemoteVpc?: boolean;

  @Metadata({ data: "queryParam, name=AllowEgressFromLocalClassicLinkToRemoteVpc" })
  allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  @Metadata({ data: "queryParam, name=AllowEgressFromLocalVpcToRemoteClassicLink" })
  allowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}

export enum GetModifyVpcPeeringConnectionOptionsActionEnum {
    ModifyVpcPeeringConnectionOptions = "ModifyVpcPeeringConnectionOptions"
}


// GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions
/** 
 * The VPC peering connection options.
**/
export class GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=AllowDnsResolutionFromRemoteVpc" })
  allowDnsResolutionFromRemoteVpc?: boolean;

  @Metadata({ data: "queryParam, name=AllowEgressFromLocalClassicLinkToRemoteVpc" })
  allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  @Metadata({ data: "queryParam, name=AllowEgressFromLocalVpcToRemoteClassicLink" })
  allowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}

export enum GetModifyVpcPeeringConnectionOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyVpcPeeringConnectionOptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AccepterPeeringConnectionOptions" })
  accepterPeeringConnectionOptions?: GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyVpcPeeringConnectionOptionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RequesterPeeringConnectionOptions" })
  requesterPeeringConnectionOptions?: GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyVpcPeeringConnectionOptionsVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcPeeringConnectionId" })
  vpcPeeringConnectionId: string;
}


export class GetModifyVpcPeeringConnectionOptionsHeaders extends SpeakeasyBase {
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


export class GetModifyVpcPeeringConnectionOptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyVpcPeeringConnectionOptionsQueryParams;

  @Metadata()
  headers: GetModifyVpcPeeringConnectionOptionsHeaders;
}


export class GetModifyVpcPeeringConnectionOptionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
