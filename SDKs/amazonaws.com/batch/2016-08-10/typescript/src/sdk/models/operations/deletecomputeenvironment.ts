import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteComputeEnvironmentHeaders extends SpeakeasyBase {
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


export class DeleteComputeEnvironmentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=computeEnvironment" })
  computeEnvironment: string;
}


export class DeleteComputeEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteComputeEnvironmentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DeleteComputeEnvironmentRequestBody;
}


export class DeleteComputeEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  clientException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteComputeEnvironmentResponse?: Map<string, any>;

  @Metadata()
  serverException?: any;

  @Metadata()
  statusCode: number;
}
