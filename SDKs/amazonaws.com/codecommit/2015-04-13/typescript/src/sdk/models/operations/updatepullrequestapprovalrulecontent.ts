import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdatePullRequestApprovalRuleContentXAmzTargetEnum {
    CodeCommit20150413UpdatePullRequestApprovalRuleContent = "CodeCommit_20150413.UpdatePullRequestApprovalRuleContent"
}


export class UpdatePullRequestApprovalRuleContentHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdatePullRequestApprovalRuleContentXAmzTargetEnum;
}


export class UpdatePullRequestApprovalRuleContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdatePullRequestApprovalRuleContentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdatePullRequestApprovalRuleContentInput;
}


export class UpdatePullRequestApprovalRuleContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  approvalRuleContentRequiredException?: any;

  @SpeakeasyMetadata()
  approvalRuleDoesNotExistException?: any;

  @SpeakeasyMetadata()
  approvalRuleNameRequiredException?: any;

  @SpeakeasyMetadata()
  cannotModifyApprovalRuleFromTemplateException?: any;

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
  invalidApprovalRuleContentException?: any;

  @SpeakeasyMetadata()
  invalidApprovalRuleNameException?: any;

  @SpeakeasyMetadata()
  invalidPullRequestIdException?: any;

  @SpeakeasyMetadata()
  invalidRuleContentSha256Exception?: any;

  @SpeakeasyMetadata()
  pullRequestAlreadyClosedException?: any;

  @SpeakeasyMetadata()
  pullRequestDoesNotExistException?: any;

  @SpeakeasyMetadata()
  pullRequestIdRequiredException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatePullRequestApprovalRuleContentOutput?: shared.UpdatePullRequestApprovalRuleContentOutput;
}
