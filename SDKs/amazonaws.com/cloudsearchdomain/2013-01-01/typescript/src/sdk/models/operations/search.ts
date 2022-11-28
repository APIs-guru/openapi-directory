import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchFormatEnum {
    Sdk = "sdk"
}

export enum SearchPrettyEnum {
    True = "true"
}

export enum SearchQParserEnum {
    Simple = "simple",
    Structured = "structured",
    Lucene = "lucene",
    Dismax = "dismax"
}


export class SearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expr" })
  expr?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet" })
  facet?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format: SearchFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fq" })
  fq?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=highlight" })
  highlight?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partial" })
  partial?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pretty" })
  pretty: SearchPrettyEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q.options" })
  qOptions?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q.parser" })
  qParser?: SearchQParserEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=return" })
  return?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stats" })
  stats?: string;
}


export class SearchHeaders extends SpeakeasyBase {
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


export class SearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchQueryParams;

  @SpeakeasyMetadata()
  headers: SearchHeaders;
}


export class SearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  searchException?: shared.SearchException;

  @SpeakeasyMetadata()
  searchResponse?: shared.SearchResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
