import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BatchDisassociateApprovalRuleTemplateFromRepositoriesXAmzTargetEnum {
    CodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositories = "CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories"
}


export class BatchDisassociateApprovalRuleTemplateFromRepositoriesHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchDisassociateApprovalRuleTemplateFromRepositoriesXAmzTargetEnum;
}


export class BatchDisassociateApprovalRuleTemplateFromRepositoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchDisassociateApprovalRuleTemplateFromRepositoriesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchDisassociateApprovalRuleTemplateFromRepositoriesInput;
}


export class BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  approvalRuleTemplateDoesNotExistException?: any;

  @SpeakeasyMetadata()
  approvalRuleTemplateNameRequiredException?: any;

  @SpeakeasyMetadata()
  batchDisassociateApprovalRuleTemplateFromRepositoriesOutput?: shared.BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput;

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
  maximumRepositoryNamesExceededException?: any;

  @SpeakeasyMetadata()
  repositoryNamesRequiredException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
