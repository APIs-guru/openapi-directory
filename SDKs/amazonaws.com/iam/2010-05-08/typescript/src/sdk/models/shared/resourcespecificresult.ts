import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyEvaluationDecisionTypeEnum } from "./policyevaluationdecisiontypeenum";
import { Statement } from "./statement";
import { PermissionsBoundaryDecisionDetail } from "./permissionsboundarydecisiondetail";



// ResourceSpecificResult
/** 
 * <p>Contains the result of the simulation of a single API operation call on a single resource.</p> <p>This data type is used by a member of the <a>EvaluationResult</a> data type.</p>
**/
export class ResourceSpecificResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  evalDecisionDetails?: Map<string, PolicyEvaluationDecisionTypeEnum>;

  @SpeakeasyMetadata()
  evalResourceDecision: PolicyEvaluationDecisionTypeEnum;

  @SpeakeasyMetadata()
  evalResourceName: string;

  @SpeakeasyMetadata({ elemType: Statement })
  matchedStatements?: Statement[];

  @SpeakeasyMetadata()
  missingContextValues?: string[];

  @SpeakeasyMetadata()
  permissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail;
}
