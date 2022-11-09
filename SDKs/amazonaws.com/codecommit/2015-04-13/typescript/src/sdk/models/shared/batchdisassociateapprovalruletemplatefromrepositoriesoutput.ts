import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchDisassociateApprovalRuleTemplateFromRepositoriesError } from "./batchdisassociateapprovalruletemplatefromrepositorieserror";


export class BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=disassociatedRepositoryNames" })
  disassociatedRepositoryNames: string[];

  @Metadata({ data: "json, name=errors", elemType: shared.BatchDisassociateApprovalRuleTemplateFromRepositoriesError })
  errors: BatchDisassociateApprovalRuleTemplateFromRepositoriesError[];
}
