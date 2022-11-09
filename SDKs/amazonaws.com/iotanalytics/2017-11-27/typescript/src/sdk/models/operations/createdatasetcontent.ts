import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDatasetContentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=datasetName" })
  datasetName: string;
}


export class CreateDatasetContentHeaders extends SpeakeasyBase {
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


export class CreateDatasetContentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=versionId" })
  versionId?: string;
}


export class CreateDatasetContentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateDatasetContentPathParams;

  @Metadata()
  headers: CreateDatasetContentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDatasetContentRequestBody;
}


export class CreateDatasetContentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createDatasetContentResponse?: shared.CreateDatasetContentResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
