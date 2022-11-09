import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AcknowledgeJobXAmzTargetEnum {
    CodePipeline20150709AcknowledgeJob = "CodePipeline_20150709.AcknowledgeJob"
}


export class AcknowledgeJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: AcknowledgeJobXAmzTargetEnum;
}


export class AcknowledgeJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: AcknowledgeJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AcknowledgeJobInput;
}


export class AcknowledgeJobResponse extends SpeakeasyBase {
  @Metadata()
  acknowledgeJobOutput?: shared.AcknowledgeJobOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidNonceException?: any;

  @Metadata()
  jobNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
