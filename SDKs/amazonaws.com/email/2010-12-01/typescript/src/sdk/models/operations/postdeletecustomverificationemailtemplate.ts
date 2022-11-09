import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDeleteCustomVerificationEmailTemplateActionEnum {
    DeleteCustomVerificationEmailTemplate = "DeleteCustomVerificationEmailTemplate"
}

export enum PostDeleteCustomVerificationEmailTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class PostDeleteCustomVerificationEmailTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDeleteCustomVerificationEmailTemplateActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDeleteCustomVerificationEmailTemplateVersionEnum;
}


export class PostDeleteCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
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


export class PostDeleteCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDeleteCustomVerificationEmailTemplateQueryParams;

  @Metadata()
  headers: PostDeleteCustomVerificationEmailTemplateHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDeleteCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
