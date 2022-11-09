import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateTemplateActionEnum {
    CreateTemplate = "CreateTemplate"
}


// GetCreateTemplateTemplate
/** 
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
export class GetCreateTemplateTemplate extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=HtmlPart" })
  htmlPart?: string;

  @Metadata({ data: "queryParam, name=SubjectPart" })
  subjectPart?: string;

  @Metadata({ data: "queryParam, name=TemplateName" })
  templateName: string;

  @Metadata({ data: "queryParam, name=TextPart" })
  textPart?: string;
}

export enum GetCreateTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetCreateTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateTemplateActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Template" })
  template: GetCreateTemplateTemplate;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateTemplateVersionEnum;
}


export class GetCreateTemplateHeaders extends SpeakeasyBase {
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


export class GetCreateTemplateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateTemplateQueryParams;

  @Metadata()
  headers: GetCreateTemplateHeaders;
}


export class GetCreateTemplateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
