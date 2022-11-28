import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyVolumeActionEnum {
    ModifyVolume = "ModifyVolume"
}

export enum GetModifyVolumeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}

export enum GetModifyVolumeVolumeTypeEnum {
    Standard = "standard",
    Io1 = "io1",
    Io2 = "io2",
    Gp2 = "gp2",
    Sc1 = "sc1",
    St1 = "st1",
    Gp3 = "gp3"
}


export class GetModifyVolumeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyVolumeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Iops" })
  iops?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MultiAttachEnabled" })
  multiAttachEnabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Size" })
  size?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Throughput" })
  throughput?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyVolumeVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VolumeId" })
  volumeId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VolumeType" })
  volumeType?: GetModifyVolumeVolumeTypeEnum;
}


export class GetModifyVolumeHeaders extends SpeakeasyBase {
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


export class GetModifyVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyVolumeQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyVolumeHeaders;
}


export class GetModifyVolumeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
