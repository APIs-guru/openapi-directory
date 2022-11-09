import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyHostsActionEnum {
    ModifyHosts = "ModifyHosts"
}

export enum GetModifyHostsAutoPlacementEnum {
    On = "on"
,    Off = "off"
}

export enum GetModifyHostsHostRecoveryEnum {
    On = "on"
,    Off = "off"
}

export enum GetModifyHostsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyHostsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyHostsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoPlacement" })
  autoPlacement?: GetModifyHostsAutoPlacementEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HostId" })
  hostId: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=HostRecovery" })
  hostRecovery?: GetModifyHostsHostRecoveryEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceFamily" })
  instanceFamily?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceType" })
  instanceType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyHostsVersionEnum;
}


export class GetModifyHostsHeaders extends SpeakeasyBase {
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


export class GetModifyHostsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyHostsQueryParams;

  @Metadata()
  headers: GetModifyHostsHeaders;
}


export class GetModifyHostsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
