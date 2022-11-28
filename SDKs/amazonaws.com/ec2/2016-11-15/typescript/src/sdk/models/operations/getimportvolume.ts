import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetImportVolumeActionEnum {
    ImportVolume = "ImportVolume"
}


// GetImportVolumeImage
/** 
 * Describes a disk image.
**/
export class GetImportVolumeImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=Bytes" })
  bytes: number;

  @SpeakeasyMetadata({ data: "queryParam, name=Format" })
  format: shared.DiskImageFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, name=ImportManifestUrl" })
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
  @SpeakeasyMetadata({ data: "queryParam, name=Size" })
  size: number;
}


export class GetImportVolumeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetImportVolumeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZone" })
  availabilityZone: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Image" })
  image: GetImportVolumeImage;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetImportVolumeVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Volume" })
  volume: GetImportVolumeVolume;
}


export class GetImportVolumeHeaders extends SpeakeasyBase {
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


export class GetImportVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetImportVolumeQueryParams;

  @SpeakeasyMetadata()
  headers: GetImportVolumeHeaders;
}


export class GetImportVolumeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
