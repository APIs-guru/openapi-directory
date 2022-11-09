import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetPullRequestApprovalStatesXAmzTargetEnum {
    CodeCommit20150413GetPullRequestApprovalStates = "CodeCommit_20150413.GetPullRequestApprovalStates"
}


export class GetPullRequestApprovalStatesHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetPullRequestApprovalStatesXAmzTargetEnum;
}


export class GetPullRequestApprovalStatesRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetPullRequestApprovalStatesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetPullRequestApprovalStatesInput;
}


export class GetPullRequestApprovalStatesResponse extends SpeakeasyBase {
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
  getPullRequestApprovalStatesOutput?: shared.GetPullRequestApprovalStatesOutput;

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
  statusCode: number;
}
