import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostGetCustomVerificationEmailTemplateActionEnum {
    GetCustomVerificationEmailTemplate = "GetCustomVerificationEmailTemplate"
}

export enum PostGetCustomVerificationEmailTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostGetCustomVerificationEmailTemplateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetCustomVerificationEmailTemplateActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetCustomVerificationEmailTemplateVersionEnum;
}


export class PostGetCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
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


export class PostGetCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostGetCustomVerificationEmailTemplateQueryParams;

  @SpeakeasyMetadata()
  headers: PostGetCustomVerificationEmailTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
