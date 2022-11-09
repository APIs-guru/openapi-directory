import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetApplySecurityGroupsToClientVpnTargetNetworkActionEnum {
    ApplySecurityGroupsToClientVpnTargetNetwork = "ApplySecurityGroupsToClientVpnTargetNetwork"
}

export enum GetApplySecurityGroupsToClientVpnTargetNetworkVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetApplySecurityGroupsToClientVpnTargetNetworkActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientVpnEndpointId" })
  clientVpnEndpointId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SecurityGroupId" })
  securityGroupId: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetApplySecurityGroupsToClientVpnTargetNetworkVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcId" })
  vpcId: string;
}


export class GetApplySecurityGroupsToClientVpnTargetNetworkHeaders extends SpeakeasyBase {
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


export class GetApplySecurityGroupsToClientVpnTargetNetworkRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams;

  @Metadata()
  headers: GetApplySecurityGroupsToClientVpnTargetNetworkHeaders;
}


export class GetApplySecurityGroupsToClientVpnTargetNetworkResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
