import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDefineAnalysisSchemeActionEnum {
    DefineAnalysisScheme = "DefineAnalysisScheme"
}

export enum PostDefineAnalysisSchemeVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}


export class PostDefineAnalysisSchemeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDefineAnalysisSchemeActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDefineAnalysisSchemeVersionEnum;
}


export class PostDefineAnalysisSchemeHeaders extends SpeakeasyBase {
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


export class PostDefineAnalysisSchemeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDefineAnalysisSchemeQueryParams;

  @Metadata()
  headers: PostDefineAnalysisSchemeHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDefineAnalysisSchemeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
