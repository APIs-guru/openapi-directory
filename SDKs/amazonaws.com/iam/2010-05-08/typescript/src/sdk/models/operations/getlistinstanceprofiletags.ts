import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListInstanceProfileTagsActionEnum {
    ListInstanceProfileTags = "ListInstanceProfileTags"
}

export enum GetListInstanceProfileTagsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}


export class GetListInstanceProfileTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListInstanceProfileTagsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=InstanceProfileName" })
  instanceProfileName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListInstanceProfileTagsVersionEnum;
}


export class GetListInstanceProfileTagsHeaders extends SpeakeasyBase {
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


export class GetListInstanceProfileTagsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListInstanceProfileTagsQueryParams;

  @Metadata()
  headers: GetListInstanceProfileTagsHeaders;
}


export class GetListInstanceProfileTagsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
