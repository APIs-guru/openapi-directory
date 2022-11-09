import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyInstancePlacementActionEnum {
    ModifyInstancePlacement = "ModifyInstancePlacement"
}

export enum GetModifyInstancePlacementAffinityEnum {
    Default = "default"
,    Host = "host"
}

export enum GetModifyInstancePlacementTenancyEnum {
    Dedicated = "dedicated"
,    Host = "host"
}

export enum GetModifyInstancePlacementVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyInstancePlacementQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyInstancePlacementActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Affinity" })
  affinity?: GetModifyInstancePlacementAffinityEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GroupName" })
  groupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HostId" })
  hostId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HostResourceGroupArn" })
  hostResourceGroupArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PartitionNumber" })
  partitionNumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Tenancy" })
  tenancy?: GetModifyInstancePlacementTenancyEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyInstancePlacementVersionEnum;
}


export class GetModifyInstancePlacementHeaders extends SpeakeasyBase {
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


export class GetModifyInstancePlacementRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyInstancePlacementQueryParams;

  @Metadata()
  headers: GetModifyInstancePlacementHeaders;
}


export class GetModifyInstancePlacementResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
