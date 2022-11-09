import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreatePullRequestApprovalRuleXAmzTargetEnum {
    CodeCommit20150413CreatePullRequestApprovalRule = "CodeCommit_20150413.CreatePullRequestApprovalRule"
}


export class CreatePullRequestApprovalRuleHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreatePullRequestApprovalRuleXAmzTargetEnum;
}


export class CreatePullRequestApprovalRuleRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreatePullRequestApprovalRuleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreatePullRequestApprovalRuleInput;
}


export class CreatePullRequestApprovalRuleResponse extends SpeakeasyBase {
  @Metadata()
  approvalRuleContentRequiredException?: any;

  @Metadata()
  approvalRuleNameAlreadyExistsException?: any;

  @Metadata()
  approvalRuleNameRequiredException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createPullRequestApprovalRuleOutput?: shared.CreatePullRequestApprovalRuleOutput;

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
  numberOfRulesExceededException?: any;

  @Metadata()
  pullRequestAlreadyClosedException?: any;

  @Metadata()
  pullRequestDoesNotExistException?: any;

  @Metadata()
  pullRequestIdRequiredException?: any;

  @Metadata()
  statusCode: number;
}
