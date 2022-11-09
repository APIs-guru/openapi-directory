import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PublishPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=topic" })
  topic: string;
}


export class PublishQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=qos" })
  qos?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=retain" })
  retain?: boolean;
}


export class PublishHeaders extends SpeakeasyBase {
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


export class PublishRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=payload" })
  payload?: string;
}


export class PublishRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PublishPathParams;

  @Metadata()
  queryParams: PublishQueryParams;

  @Metadata()
  headers: PublishHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PublishRequestBody;
}


export class PublishResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  methodNotAllowedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedException?: any;
}
