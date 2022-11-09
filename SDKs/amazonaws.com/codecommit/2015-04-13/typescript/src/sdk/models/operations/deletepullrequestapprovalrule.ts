import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeletePullRequestApprovalRuleXAmzTargetEnum {
    CodeCommit20150413DeletePullRequestApprovalRule = "CodeCommit_20150413.DeletePullRequestApprovalRule"
}


export class DeletePullRequestApprovalRuleHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeletePullRequestApprovalRuleXAmzTargetEnum;
}


export class DeletePullRequestApprovalRuleRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeletePullRequestApprovalRuleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeletePullRequestApprovalRuleInput;
}


export class DeletePullRequestApprovalRuleResponse extends SpeakeasyBase {
  @Metadata()
  approvalRuleNameRequiredException?: any;

  @Metadata()
  cannotDeleteApprovalRuleFromTemplateException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  deletePullRequestApprovalRuleOutput?: shared.DeletePullRequestApprovalRuleOutput;

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
  invalidApprovalRuleNameException?: any;

  @Metadata()
  invalidPullRequestIdException?: any;

  @Metadata()
  pullRequestAlreadyClosedException?: any;

  @Metadata()
  pullRequestDoesNotExistException?: any;

  @Metadata()
  pullRequestIdRequiredException?: any;

  @Metadata()
  statusCode: number;
}
