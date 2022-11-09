import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRevokeClientVpnIngressActionEnum {
    RevokeClientVpnIngress = "RevokeClientVpnIngress"
}

export enum GetRevokeClientVpnIngressVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetRevokeClientVpnIngressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AccessGroupId" })
  accessGroupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRevokeClientVpnIngressActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientVpnEndpointId" })
  clientVpnEndpointId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=RevokeAllGroups" })
  revokeAllGroups?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TargetNetworkCidr" })
  targetNetworkCidr: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRevokeClientVpnIngressVersionEnum;
}


export class GetRevokeClientVpnIngressHeaders extends SpeakeasyBase {
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


export class GetRevokeClientVpnIngressRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRevokeClientVpnIngressQueryParams;

  @Metadata()
  headers: GetRevokeClientVpnIngressHeaders;
}


export class GetRevokeClientVpnIngressResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
