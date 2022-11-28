import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetTestRenderTemplateActionEnum {
    TestRenderTemplate = "TestRenderTemplate"
}

export enum GetTestRenderTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetTestRenderTemplateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetTestRenderTemplateActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TemplateData" })
  templateData: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TemplateName" })
  templateName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetTestRenderTemplateVersionEnum;
}


export class GetTestRenderTemplateHeaders extends SpeakeasyBase {
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


export class GetTestRenderTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTestRenderTemplateQueryParams;

  @SpeakeasyMetadata()
  headers: GetTestRenderTemplateHeaders;
}


export class GetTestRenderTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
