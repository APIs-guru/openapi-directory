import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteLoginProfileActionEnum {
    DeleteLoginProfile = "DeleteLoginProfile"
}

export enum GetDeleteLoginProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetDeleteLoginProfileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteLoginProfileActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserName" })
  userName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteLoginProfileVersionEnum;
}


export class GetDeleteLoginProfileHeaders extends SpeakeasyBase {
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


export class GetDeleteLoginProfileRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteLoginProfileQueryParams;

  @Metadata()
  headers: GetDeleteLoginProfileHeaders;
}


export class GetDeleteLoginProfileResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
