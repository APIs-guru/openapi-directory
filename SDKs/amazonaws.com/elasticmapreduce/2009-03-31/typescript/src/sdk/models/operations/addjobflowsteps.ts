import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AddJobFlowStepsXAmzTargetEnum {
    ElasticMapReduceAddJobFlowSteps = "ElasticMapReduce.AddJobFlowSteps"
}


export class AddJobFlowStepsHeaders extends SpeakeasyBase {
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
  xAmzTarget: AddJobFlowStepsXAmzTargetEnum;
}


export class AddJobFlowStepsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AddJobFlowStepsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AddJobFlowStepsInput;
}


export class AddJobFlowStepsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addJobFlowStepsOutput?: shared.AddJobFlowStepsOutput;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
