import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyHostsActionEnum {
    ModifyHosts = "ModifyHosts"
}

export enum GetModifyHostsAutoPlacementEnum {
    On = "on",
    Off = "off"
}

export enum GetModifyHostsHostRecoveryEnum {
    On = "on",
    Off = "off"
}

export enum GetModifyHostsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyHostsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyHostsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoPlacement" })
  autoPlacement?: GetModifyHostsAutoPlacementEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HostId" })
  hostId: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HostRecovery" })
  hostRecovery?: GetModifyHostsHostRecoveryEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceFamily" })
  instanceFamily?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyHostsVersionEnum;
}


export class GetModifyHostsHeaders extends SpeakeasyBase {
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


export class GetModifyHostsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyHostsQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyHostsHeaders;
}


export class GetModifyHostsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
