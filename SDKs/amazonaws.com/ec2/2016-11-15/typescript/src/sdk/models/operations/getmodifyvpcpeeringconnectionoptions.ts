import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions
/** 
 * The VPC peering connection options.
**/
export class GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=AllowDnsResolutionFromRemoteVpc" })
  allowDnsResolutionFromRemoteVpc?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, name=AllowEgressFromLocalClassicLinkToRemoteVpc" })
  allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, name=AllowEgressFromLocalVpcToRemoteClassicLink" })
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
  @SpeakeasyMetadata({ data: "queryParam, name=AllowDnsResolutionFromRemoteVpc" })
  allowDnsResolutionFromRemoteVpc?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, name=AllowEgressFromLocalClassicLinkToRemoteVpc" })
  allowEgressFromLocalClassicLinkToRemoteVpc?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, name=AllowEgressFromLocalVpcToRemoteClassicLink" })
  allowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}

export enum GetModifyVpcPeeringConnectionOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyVpcPeeringConnectionOptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AccepterPeeringConnectionOptions" })
  accepterPeeringConnectionOptions?: GetModifyVpcPeeringConnectionOptionsAccepterPeeringConnectionOptions;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyVpcPeeringConnectionOptionsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=RequesterPeeringConnectionOptions" })
  requesterPeeringConnectionOptions?: GetModifyVpcPeeringConnectionOptionsRequesterPeeringConnectionOptions;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyVpcPeeringConnectionOptionsVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcPeeringConnectionId" })
  vpcPeeringConnectionId: string;
}


export class GetModifyVpcPeeringConnectionOptionsHeaders extends SpeakeasyBase {
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


export class GetModifyVpcPeeringConnectionOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyVpcPeeringConnectionOptionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyVpcPeeringConnectionOptionsHeaders;
}


export class GetModifyVpcPeeringConnectionOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
