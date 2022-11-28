import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAuthorizeClientVpnIngressActionEnum {
    AuthorizeClientVpnIngress = "AuthorizeClientVpnIngress"
}

export enum GetAuthorizeClientVpnIngressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAuthorizeClientVpnIngressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AccessGroupId" })
  accessGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAuthorizeClientVpnIngressActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AuthorizeAllGroups" })
  authorizeAllGroups?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientVpnEndpointId" })
  clientVpnEndpointId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TargetNetworkCidr" })
  targetNetworkCidr: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAuthorizeClientVpnIngressVersionEnum;
}


export class GetAuthorizeClientVpnIngressHeaders extends SpeakeasyBase {
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


export class GetAuthorizeClientVpnIngressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAuthorizeClientVpnIngressQueryParams;

  @SpeakeasyMetadata()
  headers: GetAuthorizeClientVpnIngressHeaders;
}


export class GetAuthorizeClientVpnIngressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
