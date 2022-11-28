import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateTemplateActionEnum {
    CreateTemplate = "CreateTemplate"
}


// GetCreateTemplateTemplate
/** 
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
export class GetCreateTemplateTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=HtmlPart" })
  htmlPart?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=SubjectPart" })
  subjectPart?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=TemplateName" })
  templateName: string;

  @SpeakeasyMetadata({ data: "queryParam, name=TextPart" })
  textPart?: string;
}

export enum GetCreateTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetCreateTemplateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateTemplateActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Template" })
  template: GetCreateTemplateTemplate;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateTemplateVersionEnum;
}


export class GetCreateTemplateHeaders extends SpeakeasyBase {
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


export class GetCreateTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateTemplateQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreateTemplateHeaders;
}


export class GetCreateTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
