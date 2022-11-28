import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyEvaluationDecisionTypeEnum } from "./policyevaluationdecisiontypeenum";
import { Statement } from "./statement";
import { OrganizationsDecisionDetail } from "./organizationsdecisiondetail";
import { PermissionsBoundaryDecisionDetail } from "./permissionsboundarydecisiondetail";
import { ResourceSpecificResult } from "./resourcespecificresult";
/**
 * <p>Contains the results of a simulation.</p> <p>This data type is used by the return parameter of <code> <a>SimulateCustomPolicy</a> </code> and <code> <a>SimulatePrincipalPolicy</a> </code>.</p>
**/
export declare class EvaluationResult extends SpeakeasyBase {
    evalActionName: string;
    evalDecision: PolicyEvaluationDecisionTypeEnum;
    evalDecisionDetails?: Map<string, PolicyEvaluationDecisionTypeEnum>;
    evalResourceName?: string;
    matchedStatements?: Statement[];
    missingContextValues?: string[];
    organizationsDecisionDetail?: OrganizationsDecisionDetail;
    permissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail;
    resourceSpecificResults?: ResourceSpecificResult[];
}
