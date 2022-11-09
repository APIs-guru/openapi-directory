import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CancelStepsXAmzTargetEnum {
    ElasticMapReduceCancelSteps = "ElasticMapReduce.CancelSteps"
}


export class CancelStepsHeaders extends SpeakeasyBase {
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
  xAmzTarget: CancelStepsXAmzTargetEnum;
}


export class CancelStepsRequest extends SpeakeasyBase {
  @Metadata()
  headers: CancelStepsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CancelStepsInput;
}


export class CancelStepsResponse extends SpeakeasyBase {
  @Metadata()
  cancelStepsOutput?: shared.CancelStepsOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;
}
