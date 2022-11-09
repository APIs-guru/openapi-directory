import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutApprovalResultXAmzTargetEnum {
    CodePipeline20150709PutApprovalResult = "CodePipeline_20150709.PutApprovalResult"
}


export class PutApprovalResultHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutApprovalResultXAmzTargetEnum;
}


export class PutApprovalResultRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutApprovalResultHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutApprovalResultInput;
}


export class PutApprovalResultResponse extends SpeakeasyBase {
  @Metadata()
  actionNotFoundException?: any;

  @Metadata()
  approvalAlreadyCompletedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidApprovalTokenException?: any;

  @Metadata()
  pipelineNotFoundException?: any;

  @Metadata()
  putApprovalResultOutput?: shared.PutApprovalResultOutput;

  @Metadata()
  stageNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
