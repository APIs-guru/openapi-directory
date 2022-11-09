import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetAccessKeyLastUsedActionEnum {
    GetAccessKeyLastUsed = "GetAccessKeyLastUsed"
}

export enum GetGetAccessKeyLastUsedVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetGetAccessKeyLastUsedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AccessKeyId" })
  accessKeyId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetAccessKeyLastUsedActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetAccessKeyLastUsedVersionEnum;
}


export class GetGetAccessKeyLastUsedHeaders extends SpeakeasyBase {
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


export class GetGetAccessKeyLastUsedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetAccessKeyLastUsedQueryParams;

  @Metadata()
  headers: GetGetAccessKeyLastUsedHeaders;
}


export class GetGetAccessKeyLastUsedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
