import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDefineAnalysisSchemeActionEnum {
    DefineAnalysisScheme = "DefineAnalysisScheme"
}

export enum PostDefineAnalysisSchemeVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}


export class PostDefineAnalysisSchemeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDefineAnalysisSchemeActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDefineAnalysisSchemeVersionEnum;
}


export class PostDefineAnalysisSchemeHeaders extends SpeakeasyBase {
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


export class PostDefineAnalysisSchemeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostDefineAnalysisSchemeQueryParams;

  @SpeakeasyMetadata()
  headers: PostDefineAnalysisSchemeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDefineAnalysisSchemeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
