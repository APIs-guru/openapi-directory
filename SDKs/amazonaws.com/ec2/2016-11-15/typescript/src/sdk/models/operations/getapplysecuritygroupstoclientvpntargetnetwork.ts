import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetApplySecurityGroupsToClientVpnTargetNetworkActionEnum {
    ApplySecurityGroupsToClientVpnTargetNetwork = "ApplySecurityGroupsToClientVpnTargetNetwork"
}

export enum GetApplySecurityGroupsToClientVpnTargetNetworkVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetApplySecurityGroupsToClientVpnTargetNetworkActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientVpnEndpointId" })
  clientVpnEndpointId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SecurityGroupId" })
  securityGroupId: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetApplySecurityGroupsToClientVpnTargetNetworkVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcId" })
  vpcId: string;
}


export class GetApplySecurityGroupsToClientVpnTargetNetworkHeaders extends SpeakeasyBase {
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


export class GetApplySecurityGroupsToClientVpnTargetNetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApplySecurityGroupsToClientVpnTargetNetworkQueryParams;

  @SpeakeasyMetadata()
  headers: GetApplySecurityGroupsToClientVpnTargetNetworkHeaders;
}


export class GetApplySecurityGroupsToClientVpnTargetNetworkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
