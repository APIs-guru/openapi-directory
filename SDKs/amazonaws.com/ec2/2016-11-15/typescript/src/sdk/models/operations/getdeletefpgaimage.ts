import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteFpgaImageActionEnum {
    DeleteFpgaImage = "DeleteFpgaImage"
}

export enum GetDeleteFpgaImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteFpgaImageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteFpgaImageActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FpgaImageId" })
  fpgaImageId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteFpgaImageVersionEnum;
}


export class GetDeleteFpgaImageHeaders extends SpeakeasyBase {
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


export class GetDeleteFpgaImageRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteFpgaImageQueryParams;

  @Metadata()
  headers: GetDeleteFpgaImageHeaders;
}


export class GetDeleteFpgaImageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
