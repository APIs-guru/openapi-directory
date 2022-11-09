import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListRepositoriesForApprovalRuleTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum {
    CodeCommit20150413ListRepositoriesForApprovalRuleTemplate = "CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate"
}


export class ListRepositoriesForApprovalRuleTemplateHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum;
}


export class ListRepositoriesForApprovalRuleTemplateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListRepositoriesForApprovalRuleTemplateQueryParams;

  @Metadata()
  headers: ListRepositoriesForApprovalRuleTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListRepositoriesForApprovalRuleTemplateInput;
}


export class ListRepositoriesForApprovalRuleTemplateResponse extends SpeakeasyBase {
  @Metadata()
  approvalRuleTemplateDoesNotExistException?: any;

  @Metadata()
  approvalRuleTemplateNameRequiredException?: any;

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
  invalidApprovalRuleTemplateNameException?: any;

  @Metadata()
  invalidContinuationTokenException?: any;

  @Metadata()
  invalidMaxResultsException?: any;

  @Metadata()
  listRepositoriesForApprovalRuleTemplateOutput?: shared.ListRepositoriesForApprovalRuleTemplateOutput;

  @Metadata()
  statusCode: number;
}
