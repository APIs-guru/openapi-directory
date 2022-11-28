import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchDisassociateApprovalRuleTemplateFromRepositoriesError } from "./batchdisassociateapprovalruletemplatefromrepositorieserror";



export class BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disassociatedRepositoryNames" })
  disassociatedRepositoryNames: string[];

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: BatchDisassociateApprovalRuleTemplateFromRepositoriesError })
  errors: BatchDisassociateApprovalRuleTemplateFromRepositoriesError[];
}
