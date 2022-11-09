import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartBulkDeploymentHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" })
  xAmznClientToken?: string;
}


export class StartBulkDeploymentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn: string;

  @Metadata({ data: "json, name=InputFileUri" })
  inputFileUri: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class StartBulkDeploymentRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartBulkDeploymentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartBulkDeploymentRequestBody;
}


export class StartBulkDeploymentResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  startBulkDeploymentResponse?: shared.StartBulkDeploymentResponse;

  @Metadata()
  statusCode: number;
}
