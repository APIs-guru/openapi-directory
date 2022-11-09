import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostUpdateCustomVerificationEmailTemplateActionEnum {
    UpdateCustomVerificationEmailTemplate = "UpdateCustomVerificationEmailTemplate"
}

export enum PostUpdateCustomVerificationEmailTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostUpdateCustomVerificationEmailTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostUpdateCustomVerificationEmailTemplateActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostUpdateCustomVerificationEmailTemplateVersionEnum;
}


export class PostUpdateCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
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


export class PostUpdateCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostUpdateCustomVerificationEmailTemplateQueryParams;

  @Metadata()
  headers: PostUpdateCustomVerificationEmailTemplateHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostUpdateCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
