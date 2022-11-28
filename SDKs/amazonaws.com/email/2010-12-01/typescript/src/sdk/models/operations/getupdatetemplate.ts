import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUpdateTemplateActionEnum {
    UpdateTemplate = "UpdateTemplate"
}


// GetUpdateTemplateTemplate
/** 
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
export class GetUpdateTemplateTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=HtmlPart" })
  htmlPart?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=SubjectPart" })
  subjectPart?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=TemplateName" })
  templateName: string;

  @SpeakeasyMetadata({ data: "queryParam, name=TextPart" })
  textPart?: string;
}

export enum GetUpdateTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetUpdateTemplateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetUpdateTemplateActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Template" })
  template: GetUpdateTemplateTemplate;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetUpdateTemplateVersionEnum;
}


export class GetUpdateTemplateHeaders extends SpeakeasyBase {
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


export class GetUpdateTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUpdateTemplateQueryParams;

  @SpeakeasyMetadata()
  headers: GetUpdateTemplateHeaders;
}


export class GetUpdateTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
