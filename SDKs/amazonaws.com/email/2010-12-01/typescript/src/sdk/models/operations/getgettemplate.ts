import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetGetTemplateActionEnum {
    GetTemplate = "GetTemplate"
}

export enum GetGetTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetGetTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetGetTemplateActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TemplateName" })
  templateName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetGetTemplateVersionEnum;
}


export class GetGetTemplateHeaders extends SpeakeasyBase {
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


export class GetGetTemplateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetTemplateQueryParams;

  @Metadata()
  headers: GetGetTemplateHeaders;
}


export class GetGetTemplateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
