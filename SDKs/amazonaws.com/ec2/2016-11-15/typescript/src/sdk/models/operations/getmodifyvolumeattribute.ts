import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyVolumeAttributeActionEnum {
    ModifyVolumeAttribute = "ModifyVolumeAttribute"
}


// GetModifyVolumeAttributeAutoEnableIo
/** 
 * Describes a value for a resource attribute that is a Boolean value.
**/
export class GetModifyVolumeAttributeAutoEnableIo extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=Value" })
  value?: boolean;
}

export enum GetModifyVolumeAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetModifyVolumeAttributeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyVolumeAttributeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutoEnableIO" })
  autoEnableIo?: GetModifyVolumeAttributeAutoEnableIo;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyVolumeAttributeVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VolumeId" })
  volumeId: string;
}


export class GetModifyVolumeAttributeHeaders extends SpeakeasyBase {
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


export class GetModifyVolumeAttributeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyVolumeAttributeQueryParams;

  @Metadata()
  headers: GetModifyVolumeAttributeHeaders;
}


export class GetModifyVolumeAttributeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
