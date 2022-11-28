import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchAssociateApprovalRuleTemplateWithRepositoriesError
/** 
 * Returns information about errors in a BatchAssociateApprovalRuleTemplateWithRepositories operation.
**/
export class BatchAssociateApprovalRuleTemplateWithRepositoriesError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryName" })
  repositoryName?: string;
}
