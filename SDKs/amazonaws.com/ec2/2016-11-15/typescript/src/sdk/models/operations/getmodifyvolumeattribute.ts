import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyVolumeAttributeActionEnum {
    ModifyVolumeAttribute = "ModifyVolumeAttribute"
}


// GetModifyVolumeAttributeAutoEnableIo
/** 
 * Describes a value for a resource attribute that is a Boolean value.
**/
export class GetModifyVolumeAttributeAutoEnableIo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=Value" })
  value?: boolean;
}

export enum GetModifyVolumeAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyVolumeAttributeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyVolumeAttributeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutoEnableIO" })
  autoEnableIo?: GetModifyVolumeAttributeAutoEnableIo;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyVolumeAttributeVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VolumeId" })
  volumeId: string;
}


export class GetModifyVolumeAttributeHeaders extends SpeakeasyBase {
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


export class GetModifyVolumeAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyVolumeAttributeQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyVolumeAttributeHeaders;
}


export class GetModifyVolumeAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
