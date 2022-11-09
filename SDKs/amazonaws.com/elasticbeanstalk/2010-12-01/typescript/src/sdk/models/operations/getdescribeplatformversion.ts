import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribePlatformVersionActionEnum {
    DescribePlatformVersion = "DescribePlatformVersion"
}

export enum GetDescribePlatformVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDescribePlatformVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribePlatformVersionActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PlatformArn" })
  platformArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribePlatformVersionVersionEnum;
}


export class GetDescribePlatformVersionHeaders extends SpeakeasyBase {
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


export class GetDescribePlatformVersionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribePlatformVersionQueryParams;

  @Metadata()
  headers: GetDescribePlatformVersionHeaders;
}


export class GetDescribePlatformVersionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
