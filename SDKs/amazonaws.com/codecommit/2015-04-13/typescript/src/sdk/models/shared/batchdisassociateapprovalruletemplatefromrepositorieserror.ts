import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchDisassociateApprovalRuleTemplateFromRepositoriesError
/** 
 * Returns information about errors in a BatchDisassociateApprovalRuleTemplateFromRepositories operation.
**/
export class BatchDisassociateApprovalRuleTemplateFromRepositoriesError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
