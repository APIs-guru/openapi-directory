import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchAssociateApprovalRuleTemplateWithRepositoriesError } from "./batchassociateapprovalruletemplatewithrepositorieserror";



export class BatchAssociateApprovalRuleTemplateWithRepositoriesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associatedRepositoryNames" })
  associatedRepositoryNames: string[];

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: BatchAssociateApprovalRuleTemplateWithRepositoriesError })
  errors: BatchAssociateApprovalRuleTemplateWithRepositoriesError[];
}
