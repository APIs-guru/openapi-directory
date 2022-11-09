import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartQueryExecutionXAmzTargetEnum {
    AmazonAthenaStartQueryExecution = "AmazonAthena.StartQueryExecution"
}


export class StartQueryExecutionHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: StartQueryExecutionXAmzTargetEnum;
}


export class StartQueryExecutionRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartQueryExecutionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartQueryExecutionInput;
}


export class StartQueryExecutionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  startQueryExecutionOutput?: shared.StartQueryExecutionOutput;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
