import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListRepositoriesForApprovalRuleTemplateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;
}

export enum ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum {
    CodeCommit20150413ListRepositoriesForApprovalRuleTemplate = "CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate"
}


export class ListRepositoriesForApprovalRuleTemplateHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum;
}


export class ListRepositoriesForApprovalRuleTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListRepositoriesForApprovalRuleTemplateQueryParams;

  @SpeakeasyMetadata()
  headers: ListRepositoriesForApprovalRuleTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListRepositoriesForApprovalRuleTemplateInput;
}


export class ListRepositoriesForApprovalRuleTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  approvalRuleTemplateDoesNotExistException?: any;

  @SpeakeasyMetadata()
  approvalRuleTemplateNameRequiredException?: any;

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
  invalidApprovalRuleTemplateNameException?: any;

  @SpeakeasyMetadata()
  invalidContinuationTokenException?: any;

  @SpeakeasyMetadata()
  invalidMaxResultsException?: any;

  @SpeakeasyMetadata()
  listRepositoriesForApprovalRuleTemplateOutput?: shared.ListRepositoriesForApprovalRuleTemplateOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
