import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchAssociateApprovalRuleTemplateWithRepositoriesError
/** 
 * Returns information about errors in a BatchAssociateApprovalRuleTemplateWithRepositories operation.
**/
export class BatchAssociateApprovalRuleTemplateWithRepositoriesError extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
