import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeleteConfigurationTemplateActionEnum {
    DeleteConfigurationTemplate = "DeleteConfigurationTemplate"
}

export enum GetDeleteConfigurationTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}


export class GetDeleteConfigurationTemplateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteConfigurationTemplateActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TemplateName" })
  templateName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteConfigurationTemplateVersionEnum;
}


export class GetDeleteConfigurationTemplateHeaders extends SpeakeasyBase {
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


export class GetDeleteConfigurationTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeleteConfigurationTemplateQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeleteConfigurationTemplateHeaders;
}


export class GetDeleteConfigurationTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
