import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PublishPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topic" })
  topic: string;
}


export class PublishQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=qos" })
  qos?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=retain" })
  retain?: boolean;
}


export class PublishHeaders extends SpeakeasyBase {
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


export class PublishRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;
}


export class PublishRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PublishPathParams;

  @SpeakeasyMetadata()
  queryParams: PublishQueryParams;

  @SpeakeasyMetadata()
  headers: PublishHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PublishRequestBody;
}


export class PublishResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  methodNotAllowedException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
