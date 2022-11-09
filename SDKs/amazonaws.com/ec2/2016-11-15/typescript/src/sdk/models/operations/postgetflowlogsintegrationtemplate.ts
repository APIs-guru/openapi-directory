import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostGetFlowLogsIntegrationTemplateActionEnum {
    GetFlowLogsIntegrationTemplate = "GetFlowLogsIntegrationTemplate"
}

export enum PostGetFlowLogsIntegrationTemplateVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class PostGetFlowLogsIntegrationTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetFlowLogsIntegrationTemplateActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetFlowLogsIntegrationTemplateVersionEnum;
}


export class PostGetFlowLogsIntegrationTemplateHeaders extends SpeakeasyBase {
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


export class PostGetFlowLogsIntegrationTemplateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostGetFlowLogsIntegrationTemplateQueryParams;

  @Metadata()
  headers: PostGetFlowLogsIntegrationTemplateHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetFlowLogsIntegrationTemplateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
