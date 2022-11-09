import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AcknowledgeThirdPartyJobXAmzTargetEnum {
    CodePipeline20150709AcknowledgeThirdPartyJob = "CodePipeline_20150709.AcknowledgeThirdPartyJob"
}


export class AcknowledgeThirdPartyJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: AcknowledgeThirdPartyJobXAmzTargetEnum;
}


export class AcknowledgeThirdPartyJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: AcknowledgeThirdPartyJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AcknowledgeThirdPartyJobInput;
}


export class AcknowledgeThirdPartyJobResponse extends SpeakeasyBase {
  @Metadata()
  acknowledgeThirdPartyJobOutput?: shared.AcknowledgeThirdPartyJobOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidClientTokenException?: any;

  @Metadata()
  invalidNonceException?: any;

  @Metadata()
  jobNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
