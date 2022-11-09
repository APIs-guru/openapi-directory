import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeletePlatformVersionActionEnum {
    DeletePlatformVersion = "DeletePlatformVersion"
}

export enum GetDeletePlatformVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDeletePlatformVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeletePlatformVersionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PlatformArn" })
  platformArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeletePlatformVersionVersionEnum;
}


export class GetDeletePlatformVersionHeaders extends SpeakeasyBase {
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


export class GetDeletePlatformVersionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeletePlatformVersionQueryParams;

  @Metadata()
  headers: GetDeletePlatformVersionHeaders;
}


export class GetDeletePlatformVersionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
