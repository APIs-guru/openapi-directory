import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum OverridePullRequestApprovalRulesXAmzTargetEnum {
    CodeCommit20150413OverridePullRequestApprovalRules = "CodeCommit_20150413.OverridePullRequestApprovalRules"
}


export class OverridePullRequestApprovalRulesHeaders extends SpeakeasyBase {
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
  xAmzTarget: OverridePullRequestApprovalRulesXAmzTargetEnum;
}


export class OverridePullRequestApprovalRulesRequest extends SpeakeasyBase {
  @Metadata()
  headers: OverridePullRequestApprovalRulesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.OverridePullRequestApprovalRulesInput;
}


export class OverridePullRequestApprovalRulesResponse extends SpeakeasyBase {
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
  invalidOverrideStatusException?: any;

  @Metadata()
  invalidPullRequestIdException?: any;

  @Metadata()
  invalidRevisionIdException?: any;

  @Metadata()
  overrideAlreadySetException?: any;

  @Metadata()
  overrideStatusRequiredException?: any;

  @Metadata()
  pullRequestAlreadyClosedException?: any;

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
