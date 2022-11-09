import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyVolumeActionEnum {
    ModifyVolume = "ModifyVolume"
}

export enum GetModifyVolumeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}

export enum GetModifyVolumeVolumeTypeEnum {
    Standard = "standard"
,    Io1 = "io1"
,    Io2 = "io2"
,    Gp2 = "gp2"
,    Sc1 = "sc1"
,    St1 = "st1"
,    Gp3 = "gp3"
}


export class GetModifyVolumeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyVolumeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Iops" })
  iops?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MultiAttachEnabled" })
  multiAttachEnabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Size" })
  size?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Throughput" })
  throughput?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyVolumeVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VolumeId" })
  volumeId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VolumeType" })
  volumeType?: GetModifyVolumeVolumeTypeEnum;
}


export class GetModifyVolumeHeaders extends SpeakeasyBase {
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


export class GetModifyVolumeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyVolumeQueryParams;

  @Metadata()
  headers: GetModifyVolumeHeaders;
}


export class GetModifyVolumeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
