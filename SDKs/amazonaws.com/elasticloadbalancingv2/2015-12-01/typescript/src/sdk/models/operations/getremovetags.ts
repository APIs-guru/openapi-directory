import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRemoveTagsActionEnum {
    RemoveTags = "RemoveTags"
}

export enum GetRemoveTagsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}


export class GetRemoveTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRemoveTagsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ResourceArns" })
  resourceArns: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=TagKeys" })
  tagKeys: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRemoveTagsVersionEnum;
}


export class GetRemoveTagsHeaders extends SpeakeasyBase {
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


export class GetRemoveTagsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRemoveTagsQueryParams;

  @Metadata()
  headers: GetRemoveTagsHeaders;
}


export class GetRemoveTagsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
