import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDimensionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CreateDimensionHeaders extends SpeakeasyBase {
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

export enum CreateDimensionRequestBodyTypeEnum {
    TopicFilter = "TOPIC_FILTER"
}


export class CreateDimensionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken: string;

  @Metadata({ data: "json, name=stringValues" })
  stringValues: string[];

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @Metadata({ data: "json, name=type" })
  type: CreateDimensionRequestBodyTypeEnum;
}


export class CreateDimensionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateDimensionPathParams;

  @Metadata()
  headers: CreateDimensionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDimensionRequestBody;
}


export class CreateDimensionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createDimensionResponse?: shared.CreateDimensionResponse;

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
