import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostGetManagedPrefixListEntriesActionEnum {
    GetManagedPrefixListEntries = "GetManagedPrefixListEntries"
}

export enum PostGetManagedPrefixListEntriesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostGetManagedPrefixListEntriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetManagedPrefixListEntriesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetManagedPrefixListEntriesVersionEnum;
}


export class PostGetManagedPrefixListEntriesHeaders extends SpeakeasyBase {
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


export class PostGetManagedPrefixListEntriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostGetManagedPrefixListEntriesQueryParams;

  @Metadata()
  headers: PostGetManagedPrefixListEntriesHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetManagedPrefixListEntriesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
