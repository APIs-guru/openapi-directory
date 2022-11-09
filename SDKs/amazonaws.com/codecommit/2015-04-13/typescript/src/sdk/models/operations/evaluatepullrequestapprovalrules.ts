import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum EvaluatePullRequestApprovalRulesXAmzTargetEnum {
    CodeCommit20150413EvaluatePullRequestApprovalRules = "CodeCommit_20150413.EvaluatePullRequestApprovalRules"
}


export class EvaluatePullRequestApprovalRulesHeaders extends SpeakeasyBase {
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
  xAmzTarget: EvaluatePullRequestApprovalRulesXAmzTargetEnum;
}


export class EvaluatePullRequestApprovalRulesRequest extends SpeakeasyBase {
  @Metadata()
  headers: EvaluatePullRequestApprovalRulesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EvaluatePullRequestApprovalRulesInput;
}


export class EvaluatePullRequestApprovalRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  encryptionIntegrityChecksFailedException?: any;

  @Metadata()
  encryptionKeyAccessDeniedException?: any;

  @Metadata()
  encryptionKeyDisabledException?: any;

  @Metadata()
  encryptionKeyNotFoundException?: any;

  @Metadata()
  encryptionKeyUnavailableException?: any;

  @Metadata()
  evaluatePullRequestApprovalRulesOutput?: shared.EvaluatePullRequestApprovalRulesOutput;

  @Metadata()
  invalidPullRequestIdException?: any;

  @Metadata()
  invalidRevisionIdException?: any;

  @Metadata()
  pullRequestDoesNotExistException?: any;

  @Metadata()
  pullRequestIdRequiredException?: any;

  @Metadata()
  revisionIdRequiredException?: any;

  @Metadata()
  revisionNotCurrentException?: any;

  @Metadata()
  statusCode: number;
}
