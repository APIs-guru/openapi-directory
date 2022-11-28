import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum EvaluatePullRequestApprovalRulesXAmzTargetEnum {
    CodeCommit20150413EvaluatePullRequestApprovalRules = "CodeCommit_20150413.EvaluatePullRequestApprovalRules"
}


export class EvaluatePullRequestApprovalRulesHeaders extends SpeakeasyBase {
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
  xAmzTarget: EvaluatePullRequestApprovalRulesXAmzTargetEnum;
}


export class EvaluatePullRequestApprovalRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: EvaluatePullRequestApprovalRulesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.EvaluatePullRequestApprovalRulesInput;
}


export class EvaluatePullRequestApprovalRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  encryptionIntegrityChecksFailedException?: any;

  @SpeakeasyMetadata()
  encryptionKeyAccessDeniedException?: any;

  @SpeakeasyMetadata()
  encryptionKeyDisabledException?: any;

  @SpeakeasyMetadata()
  encryptionKeyNotFoundException?: any;

  @SpeakeasyMetadata()
  encryptionKeyUnavailableException?: any;

  @SpeakeasyMetadata()
  evaluatePullRequestApprovalRulesOutput?: shared.EvaluatePullRequestApprovalRulesOutput;

  @SpeakeasyMetadata()
  invalidPullRequestIdException?: any;

  @SpeakeasyMetadata()
  invalidRevisionIdException?: any;

  @SpeakeasyMetadata()
  pullRequestDoesNotExistException?: any;

  @SpeakeasyMetadata()
  pullRequestIdRequiredException?: any;

  @SpeakeasyMetadata()
  revisionIdRequiredException?: any;

  @SpeakeasyMetadata()
  revisionNotCurrentException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
