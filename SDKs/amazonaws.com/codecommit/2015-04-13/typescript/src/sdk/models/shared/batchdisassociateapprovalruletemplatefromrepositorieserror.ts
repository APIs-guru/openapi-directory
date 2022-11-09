import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchDisassociateApprovalRuleTemplateFromRepositoriesError
/** 
 * Returns information about errors in a BatchDisassociateApprovalRuleTemplateFromRepositories operation.
**/
export class BatchDisassociateApprovalRuleTemplateFromRepositoriesError extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
