import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetTestRenderTemplateActionEnum {
    TestRenderTemplate = "TestRenderTemplate"
}

export enum GetTestRenderTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetTestRenderTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetTestRenderTemplateActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TemplateData" })
  templateData: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TemplateName" })
  templateName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetTestRenderTemplateVersionEnum;
}


export class GetTestRenderTemplateHeaders extends SpeakeasyBase {
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


export class GetTestRenderTemplateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTestRenderTemplateQueryParams;

  @Metadata()
  headers: GetTestRenderTemplateHeaders;
}


export class GetTestRenderTemplateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
