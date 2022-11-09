import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAssociatedApprovalRuleTemplatesForRepositoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListAssociatedApprovalRuleTemplatesForRepositoryXAmzTargetEnum {
    CodeCommit20150413ListAssociatedApprovalRuleTemplatesForRepository = "CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository"
}


export class ListAssociatedApprovalRuleTemplatesForRepositoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListAssociatedApprovalRuleTemplatesForRepositoryXAmzTargetEnum;
}


export class ListAssociatedApprovalRuleTemplatesForRepositoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAssociatedApprovalRuleTemplatesForRepositoryQueryParams;

  @Metadata()
  headers: ListAssociatedApprovalRuleTemplatesForRepositoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListAssociatedApprovalRuleTemplatesForRepositoryInput;
}


export class ListAssociatedApprovalRuleTemplatesForRepositoryResponse extends SpeakeasyBase {
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
  invalidContinuationTokenException?: any;

  @Metadata()
  invalidMaxResultsException?: any;

  @Metadata()
  invalidRepositoryNameException?: any;

  @Metadata()
  listAssociatedApprovalRuleTemplatesForRepositoryOutput?: shared.ListAssociatedApprovalRuleTemplatesForRepositoryOutput;

  @Metadata()
  repositoryDoesNotExistException?: any;

  @Metadata()
  repositoryNameRequiredException?: any;

  @Metadata()
  statusCode: number;
}
