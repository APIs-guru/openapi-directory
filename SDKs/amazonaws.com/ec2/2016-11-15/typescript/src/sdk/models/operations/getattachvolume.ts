import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAttachVolumeActionEnum {
    AttachVolume = "AttachVolume"
}

export enum GetAttachVolumeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAttachVolumeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAttachVolumeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Device" })
  device: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAttachVolumeVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VolumeId" })
  volumeId: string;
}


export class GetAttachVolumeHeaders extends SpeakeasyBase {
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


export class GetAttachVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAttachVolumeQueryParams;

  @SpeakeasyMetadata()
  headers: GetAttachVolumeHeaders;
}


export class GetAttachVolumeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
