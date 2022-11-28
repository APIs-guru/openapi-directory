import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AcknowledgeJobXAmzTargetEnum {
    CodePipeline20150709AcknowledgeJob = "CodePipeline_20150709.AcknowledgeJob"
}


export class AcknowledgeJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: AcknowledgeJobXAmzTargetEnum;
}


export class AcknowledgeJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AcknowledgeJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AcknowledgeJobInput;
}


export class AcknowledgeJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acknowledgeJobOutput?: shared.AcknowledgeJobOutput;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidNonceException?: any;

  @SpeakeasyMetadata()
  jobNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
