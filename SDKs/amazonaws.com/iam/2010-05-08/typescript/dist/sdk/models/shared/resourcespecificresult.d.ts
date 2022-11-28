import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyEvaluationDecisionTypeEnum } from "./policyevaluationdecisiontypeenum";
import { Statement } from "./statement";
import { PermissionsBoundaryDecisionDetail } from "./permissionsboundarydecisiondetail";
/**
 * <p>Contains the result of the simulation of a single API operation call on a single resource.</p> <p>This data type is used by a member of the <a>EvaluationResult</a> data type.</p>
**/
export declare class ResourceSpecificResult extends SpeakeasyBase {
    evalDecisionDetails?: Map<string, PolicyEvaluationDecisionTypeEnum>;
    evalResourceDecision: PolicyEvaluationDecisionTypeEnum;
    evalResourceName: string;
    matchedStatements?: Statement[];
    missingContextValues?: string[];
    permissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail;
}
