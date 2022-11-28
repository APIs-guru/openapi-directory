import { SpeakeasyBase } from "../../../internal/utils";
import { BatchAssociateApprovalRuleTemplateWithRepositoriesError } from "./batchassociateapprovalruletemplatewithrepositorieserror";
export declare class BatchAssociateApprovalRuleTemplateWithRepositoriesOutput extends SpeakeasyBase {
    associatedRepositoryNames: string[];
    errors: BatchAssociateApprovalRuleTemplateWithRepositoriesError[];
}
