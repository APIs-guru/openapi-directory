import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchGetOnPremisesInstancesXAmzTargetEnum {
    CodeDeploy20141006BatchGetOnPremisesInstances = "CodeDeploy_20141006.BatchGetOnPremisesInstances"
}


export class BatchGetOnPremisesInstancesHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchGetOnPremisesInstancesXAmzTargetEnum;
}


export class BatchGetOnPremisesInstancesRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchGetOnPremisesInstancesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetOnPremisesInstancesInput;
}


export class BatchGetOnPremisesInstancesResponse extends SpeakeasyBase {
  @Metadata()
  batchGetOnPremisesInstancesOutput?: shared.BatchGetOnPremisesInstancesOutput;

  @Metadata()
  batchLimitExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  instanceNameRequiredException?: any;

  @Metadata()
  invalidInstanceNameException?: any;

  @Metadata()
  statusCode: number;
}
