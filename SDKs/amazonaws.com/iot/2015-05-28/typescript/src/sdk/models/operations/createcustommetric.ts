import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCustomMetricPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=metricName" })
  metricName: string;
}


export class CreateCustomMetricHeaders extends SpeakeasyBase {
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

export enum CreateCustomMetricRequestBodyMetricTypeEnum {
    StringList = "string-list"
,    IpAddressList = "ip-address-list"
,    NumberList = "number-list"
,    Number = "number"
}


export class CreateCustomMetricRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=metricType" })
  metricType: CreateCustomMetricRequestBodyMetricTypeEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];
}


export class CreateCustomMetricRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateCustomMetricPathParams;

  @Metadata()
  headers: CreateCustomMetricHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateCustomMetricRequestBody;
}


export class CreateCustomMetricResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createCustomMetricResponse?: shared.CreateCustomMetricResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
