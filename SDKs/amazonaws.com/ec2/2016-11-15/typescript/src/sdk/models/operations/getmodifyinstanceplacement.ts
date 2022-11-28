import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyInstancePlacementActionEnum {
    ModifyInstancePlacement = "ModifyInstancePlacement"
}

export enum GetModifyInstancePlacementAffinityEnum {
    Default = "default",
    Host = "host"
}

export enum GetModifyInstancePlacementTenancyEnum {
    Dedicated = "dedicated",
    Host = "host"
}

export enum GetModifyInstancePlacementVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyInstancePlacementQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyInstancePlacementActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Affinity" })
  affinity?: GetModifyInstancePlacementAffinityEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=GroupName" })
  groupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HostId" })
  hostId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HostResourceGroupArn" })
  hostResourceGroupArn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PartitionNumber" })
  partitionNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Tenancy" })
  tenancy?: GetModifyInstancePlacementTenancyEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyInstancePlacementVersionEnum;
}


export class GetModifyInstancePlacementHeaders extends SpeakeasyBase {
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


export class GetModifyInstancePlacementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyInstancePlacementQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyInstancePlacementHeaders;
}


export class GetModifyInstancePlacementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
