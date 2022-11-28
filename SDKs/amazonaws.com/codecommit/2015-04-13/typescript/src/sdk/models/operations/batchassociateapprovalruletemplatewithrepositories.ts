import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum {
    CodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositories = "CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories"
}


export class BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum;
}


export class BatchAssociateApprovalRuleTemplateWithRepositoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchAssociateApprovalRuleTemplateWithRepositoriesInput;
}


export class BatchAssociateApprovalRuleTemplateWithRepositoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  approvalRuleTemplateDoesNotExistException?: any;

  @SpeakeasyMetadata()
  approvalRuleTemplateNameRequiredException?: any;

  @SpeakeasyMetadata()
  batchAssociateApprovalRuleTemplateWithRepositoriesOutput?: shared.BatchAssociateApprovalRuleTemplateWithRepositoriesOutput;

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
