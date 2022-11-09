import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetImportVolumeActionEnum {
    ImportVolume = "ImportVolume"
}


// GetImportVolumeImage
/** 
 * Describes a disk image.
**/
export class GetImportVolumeImage extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=Bytes" })
  bytes: number;

  @Metadata({ data: "queryParam, name=Format" })
  format: shared.DiskImageFormatEnum;

  @Metadata({ data: "queryParam, name=ImportManifestUrl" })
  importManifestUrl: string;
}

export enum GetImportVolumeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


// GetImportVolumeVolume
/** 
 * Describes an EBS volume.
**/
export class GetImportVolumeVolume extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=Size" })
  size: number;
}


export class GetImportVolumeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetImportVolumeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZone" })
  availabilityZone: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Image" })
  image: GetImportVolumeImage;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetImportVolumeVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Volume" })
  volume: GetImportVolumeVolume;
}


export class GetImportVolumeHeaders extends SpeakeasyBase {
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


export class GetImportVolumeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetImportVolumeQueryParams;

  @Metadata()
  headers: GetImportVolumeHeaders;
}


export class GetImportVolumeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
