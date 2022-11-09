import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutThirdPartyJobFailureResultXAmzTargetEnum {
    CodePipeline20150709PutThirdPartyJobFailureResult = "CodePipeline_20150709.PutThirdPartyJobFailureResult"
}


export class PutThirdPartyJobFailureResultHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutThirdPartyJobFailureResultXAmzTargetEnum;
}


export class PutThirdPartyJobFailureResultRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutThirdPartyJobFailureResultHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutThirdPartyJobFailureResultInput;
}


export class PutThirdPartyJobFailureResultResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidClientTokenException?: any;

  @Metadata()
  invalidJobStateException?: any;

  @Metadata()
  jobNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
