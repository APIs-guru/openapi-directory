import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyEvaluationDecisionTypeEnum } from "./policyevaluationdecisiontypeenum";
import { Statement } from "./statement";
import { OrganizationsDecisionDetail } from "./organizationsdecisiondetail";
import { PermissionsBoundaryDecisionDetail } from "./permissionsboundarydecisiondetail";
import { ResourceSpecificResult } from "./resourcespecificresult";



// EvaluationResult
/** 
 * <p>Contains the results of a simulation.</p> <p>This data type is used by the return parameter of <code> <a>SimulateCustomPolicy</a> </code> and <code> <a>SimulatePrincipalPolicy</a> </code>.</p>
**/
export class EvaluationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  evalActionName: string;

  @SpeakeasyMetadata()
  evalDecision: PolicyEvaluationDecisionTypeEnum;

  @SpeakeasyMetadata()
  evalDecisionDetails?: Map<string, PolicyEvaluationDecisionTypeEnum>;

  @SpeakeasyMetadata()
  evalResourceName?: string;

  @SpeakeasyMetadata({ elemType: Statement })
  matchedStatements?: Statement[];

  @SpeakeasyMetadata()
  missingContextValues?: string[];

  @SpeakeasyMetadata()
  organizationsDecisionDetail?: OrganizationsDecisionDetail;

  @SpeakeasyMetadata()
  permissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail;

  @SpeakeasyMetadata({ elemType: ResourceSpecificResult })
  resourceSpecificResults?: ResourceSpecificResult[];
}
