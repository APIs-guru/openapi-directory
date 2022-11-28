import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutApprovalResultXAmzTargetEnum {
    CodePipeline20150709PutApprovalResult = "CodePipeline_20150709.PutApprovalResult"
}


export class PutApprovalResultHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutApprovalResultXAmzTargetEnum;
}


export class PutApprovalResultRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutApprovalResultHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutApprovalResultInput;
}


export class PutApprovalResultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionNotFoundException?: any;

  @SpeakeasyMetadata()
  approvalAlreadyCompletedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidApprovalTokenException?: any;

  @SpeakeasyMetadata()
  pipelineNotFoundException?: any;

  @SpeakeasyMetadata()
  putApprovalResultOutput?: shared.PutApprovalResultOutput;

  @SpeakeasyMetadata()
  stageNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
