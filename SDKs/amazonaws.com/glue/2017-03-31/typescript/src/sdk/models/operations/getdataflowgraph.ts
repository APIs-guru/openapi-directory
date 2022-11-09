import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDataflowGraphXAmzTargetEnum {
    AwsGlueGetDataflowGraph = "AWSGlue.GetDataflowGraph"
}


export class GetDataflowGraphHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetDataflowGraphXAmzTargetEnum;
}


export class GetDataflowGraphRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetDataflowGraphHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetDataflowGraphRequest;
}


export class GetDataflowGraphResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDataflowGraphResponse?: shared.GetDataflowGraphResponse;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  statusCode: number;
}
