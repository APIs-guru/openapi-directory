import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchAssociateApprovalRuleTemplateWithRepositoriesError } from "./batchassociateapprovalruletemplatewithrepositorieserror";


export class BatchAssociateApprovalRuleTemplateWithRepositoriesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=associatedRepositoryNames" })
  associatedRepositoryNames: string[];

  @Metadata({ data: "json, name=errors", elemType: shared.BatchAssociateApprovalRuleTemplateWithRepositoriesError })
  errors: BatchAssociateApprovalRuleTemplateWithRepositoriesError[];
}
