import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRestApiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;
}

export enum PutRestApiModeEnum {
    Merge = "merge"
,    Overwrite = "overwrite"
}


export class PutRestApiQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=failonwarnings" })
  failonwarnings?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mode" })
  mode?: PutRestApiModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parameters" })
  parameters?: Map<string, string>;
}


export class PutRestApiHeaders extends SpeakeasyBase {
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


export class PutRestApiRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;
}


export class PutRestApiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRestApiPathParams;

  @Metadata()
  queryParams: PutRestApiQueryParams;

  @Metadata()
  headers: PutRestApiHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutRestApiRequestBody;
}


export class PutRestApiResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  restApi?: shared.RestApi;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}
