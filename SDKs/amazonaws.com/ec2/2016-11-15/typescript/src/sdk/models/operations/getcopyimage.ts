import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCopyImageActionEnum {
    CopyImage = "CopyImage"
}

export enum GetCopyImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCopyImageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCopyImageActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationOutpostArn" })
  destinationOutpostArn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceImageId" })
  sourceImageId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SourceRegion" })
  sourceRegion: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCopyImageVersionEnum;
}


export class GetCopyImageHeaders extends SpeakeasyBase {
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


export class GetCopyImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCopyImageQueryParams;

  @SpeakeasyMetadata()
  headers: GetCopyImageHeaders;
}


export class GetCopyImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
