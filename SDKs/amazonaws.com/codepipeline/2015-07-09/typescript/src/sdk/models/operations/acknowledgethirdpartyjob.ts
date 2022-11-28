import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AcknowledgeThirdPartyJobXAmzTargetEnum {
    CodePipeline20150709AcknowledgeThirdPartyJob = "CodePipeline_20150709.AcknowledgeThirdPartyJob"
}


export class AcknowledgeThirdPartyJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: AcknowledgeThirdPartyJobXAmzTargetEnum;
}


export class AcknowledgeThirdPartyJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AcknowledgeThirdPartyJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AcknowledgeThirdPartyJobInput;
}


export class AcknowledgeThirdPartyJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acknowledgeThirdPartyJobOutput?: shared.AcknowledgeThirdPartyJobOutput;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidClientTokenException?: any;

  @SpeakeasyMetadata()
  invalidNonceException?: any;

  @SpeakeasyMetadata()
  jobNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
