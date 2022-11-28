import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreatePullRequestApprovalRuleXAmzTargetEnum {
    CodeCommit20150413CreatePullRequestApprovalRule = "CodeCommit_20150413.CreatePullRequestApprovalRule"
}


export class CreatePullRequestApprovalRuleHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreatePullRequestApprovalRuleXAmzTargetEnum;
}


export class CreatePullRequestApprovalRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreatePullRequestApprovalRuleHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreatePullRequestApprovalRuleInput;
}


export class CreatePullRequestApprovalRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  approvalRuleContentRequiredException?: any;

  @SpeakeasyMetadata()
  approvalRuleNameAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  approvalRuleNameRequiredException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createPullRequestApprovalRuleOutput?: shared.CreatePullRequestApprovalRuleOutput;

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
  numberOfRulesExceededException?: any;

  @SpeakeasyMetadata()
  pullRequestAlreadyClosedException?: any;

  @SpeakeasyMetadata()
  pullRequestDoesNotExistException?: any;

  @SpeakeasyMetadata()
  pullRequestIdRequiredException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
