import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SearchFormatEnum {
    Sdk = "sdk"
}

export enum SearchPrettyEnum {
    True = "true"
}

export enum SearchQParserEnum {
    Simple = "simple"
,    Structured = "structured"
,    Lucene = "lucene"
,    Dismax = "dismax"
}


export class SearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=expr" })
  expr?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=facet" })
  facet?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format: SearchFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fq" })
  fq?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=highlight" })
  highlight?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=partial" })
  partial?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pretty" })
  pretty: SearchPrettyEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q.options" })
  qOptions?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q.parser" })
  qParser?: SearchQParserEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=return" })
  return?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stats" })
  stats?: string;
}


export class SearchHeaders extends SpeakeasyBase {
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


export class SearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchQueryParams;

  @Metadata()
  headers: SearchHeaders;
}


export class SearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchException?: shared.SearchException;

  @Metadata()
  searchResponse?: shared.SearchResponse;

  @Metadata()
  statusCode: number;
}
