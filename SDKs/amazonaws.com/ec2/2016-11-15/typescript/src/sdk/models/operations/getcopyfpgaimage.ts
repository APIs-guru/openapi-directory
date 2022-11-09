import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCopyFpgaImageActionEnum {
    CopyFpgaImage = "CopyFpgaImage"
}

export enum GetCopyFpgaImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetCopyFpgaImageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCopyFpgaImageActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceFpgaImageId" })
  sourceFpgaImageId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SourceRegion" })
  sourceRegion: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCopyFpgaImageVersionEnum;
}


export class GetCopyFpgaImageHeaders extends SpeakeasyBase {
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


export class GetCopyFpgaImageRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCopyFpgaImageQueryParams;

  @Metadata()
  headers: GetCopyFpgaImageHeaders;
}


export class GetCopyFpgaImageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
