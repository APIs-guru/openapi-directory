import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum {
    CodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositories = "CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories"
}


export class BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum;
}


export class BatchAssociateApprovalRuleTemplateWithRepositoriesRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchAssociateApprovalRuleTemplateWithRepositoriesInput;
}


export class BatchAssociateApprovalRuleTemplateWithRepositoriesResponse extends SpeakeasyBase {
  @Metadata()
  approvalRuleTemplateDoesNotExistException?: any;

  @Metadata()
  approvalRuleTemplateNameRequiredException?: any;

  @Metadata()
  batchAssociateApprovalRuleTemplateWithRepositoriesOutput?: shared.BatchAssociateApprovalRuleTemplateWithRepositoriesOutput;

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
  maximumRepositoryNamesExceededException?: any;

  @Metadata()
  repositoryNamesRequiredException?: any;

  @Metadata()
  statusCode: number;
}
