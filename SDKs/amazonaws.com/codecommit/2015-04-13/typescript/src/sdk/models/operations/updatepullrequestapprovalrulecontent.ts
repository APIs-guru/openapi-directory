import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdatePullRequestApprovalRuleContentXAmzTargetEnum {
    CodeCommit20150413UpdatePullRequestApprovalRuleContent = "CodeCommit_20150413.UpdatePullRequestApprovalRuleContent"
}


export class UpdatePullRequestApprovalRuleContentHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdatePullRequestApprovalRuleContentXAmzTargetEnum;
}


export class UpdatePullRequestApprovalRuleContentRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdatePullRequestApprovalRuleContentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePullRequestApprovalRuleContentInput;
}


export class UpdatePullRequestApprovalRuleContentResponse extends SpeakeasyBase {
  @Metadata()
  approvalRuleContentRequiredException?: any;

  @Metadata()
  approvalRuleDoesNotExistException?: any;

  @Metadata()
  approvalRuleNameRequiredException?: any;

  @Metadata()
  cannotModifyApprovalRuleFromTemplateException?: any;

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
  invalidApprovalRuleContentException?: any;

  @Metadata()
  invalidApprovalRuleNameException?: any;

  @Metadata()
  invalidPullRequestIdException?: any;

  @Metadata()
  invalidRuleContentSha256Exception?: any;

  @Metadata()
  pullRequestAlreadyClosedException?: any;

  @Metadata()
  pullRequestDoesNotExistException?: any;

  @Metadata()
  pullRequestIdRequiredException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updatePullRequestApprovalRuleContentOutput?: shared.UpdatePullRequestApprovalRuleContentOutput;
}
