import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EvaluationResultQualifier
/** 
 * Identifies an Config rule that evaluated an Amazon Web Services resource, and provides the type and ID of the resource that the rule evaluated.
**/
export class EvaluationResultQualifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigRuleName" })
  configRuleName?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: string;
}
