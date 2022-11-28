import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDetachVolumeActionEnum {
    DetachVolume = "DetachVolume"
}

export enum GetDetachVolumeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDetachVolumeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDetachVolumeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Device" })
  device?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDetachVolumeVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VolumeId" })
  volumeId: string;
}


export class GetDetachVolumeHeaders extends SpeakeasyBase {
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


export class GetDetachVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDetachVolumeQueryParams;

  @SpeakeasyMetadata()
  headers: GetDetachVolumeHeaders;
}


export class GetDetachVolumeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
