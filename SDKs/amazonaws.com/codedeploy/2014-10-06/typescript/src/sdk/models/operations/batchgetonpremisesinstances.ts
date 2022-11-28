import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BatchGetOnPremisesInstancesXAmzTargetEnum {
    CodeDeploy20141006BatchGetOnPremisesInstances = "CodeDeploy_20141006.BatchGetOnPremisesInstances"
}


export class BatchGetOnPremisesInstancesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: BatchGetOnPremisesInstancesXAmzTargetEnum;
}


export class BatchGetOnPremisesInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchGetOnPremisesInstancesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchGetOnPremisesInstancesInput;
}


export class BatchGetOnPremisesInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchGetOnPremisesInstancesOutput?: shared.BatchGetOnPremisesInstancesOutput;

  @SpeakeasyMetadata()
  batchLimitExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  instanceNameRequiredException?: any;

  @SpeakeasyMetadata()
  invalidInstanceNameException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
