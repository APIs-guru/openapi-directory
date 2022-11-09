import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum BatchDisassociateApprovalRuleTemplateFromRepositoriesXAmzTargetEnum {
    CodeCommit20150413BatchDisassociateApprovalRuleTemplateFromRepositories = "CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories"
}


export class BatchDisassociateApprovalRuleTemplateFromRepositoriesHeaders extends SpeakeasyBase {
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
  xAmzTarget: BatchDisassociateApprovalRuleTemplateFromRepositoriesXAmzTargetEnum;
}


export class BatchDisassociateApprovalRuleTemplateFromRepositoriesRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchDisassociateApprovalRuleTemplateFromRepositoriesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchDisassociateApprovalRuleTemplateFromRepositoriesInput;
}


export class BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse extends SpeakeasyBase {
  @Metadata()
  approvalRuleTemplateDoesNotExistException?: any;

  @Metadata()
  approvalRuleTemplateNameRequiredException?: any;

  @Metadata()
  batchDisassociateApprovalRuleTemplateFromRepositoriesOutput?: shared.BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput;

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
