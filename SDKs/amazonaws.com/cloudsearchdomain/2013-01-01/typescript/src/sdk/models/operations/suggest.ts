import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SuggestFormatEnum {
    Sdk = "sdk"
}

export enum SuggestPrettyEnum {
    True = "true"
}


export class SuggestQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format: SuggestFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pretty" })
  pretty: SuggestPrettyEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=suggester" })
  suggester: string;
}


export class SuggestHeaders extends SpeakeasyBase {
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


export class SuggestRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SuggestQueryParams;

  @Metadata()
  headers: SuggestHeaders;
}


export class SuggestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchException?: shared.SearchException;

  @Metadata()
  statusCode: number;

  @Metadata()
  suggestResponse?: shared.SuggestResponse;
}
