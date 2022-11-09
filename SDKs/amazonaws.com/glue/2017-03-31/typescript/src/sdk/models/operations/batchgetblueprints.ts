import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchGetBlueprintsXAmzTargetEnum {
    AwsGlueBatchGetBlueprints = "AWSGlue.BatchGetBlueprints"
}


export class BatchGetBlueprintsHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetBlueprintsXAmzTargetEnum;
}


export class BatchGetBlueprintsRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchGetBlueprintsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetBlueprintsRequest;
}


export class BatchGetBlueprintsResponse extends SpeakeasyBase {
  @Metadata()
  batchGetBlueprintsResponse?: shared.BatchGetBlueprintsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  operationTimeoutException?: any;

  @Metadata()
  statusCode: number;
}
