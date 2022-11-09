import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EvaluationResultQualifier
/** 
 * Identifies an Config rule that evaluated an Amazon Web Services resource, and provides the type and ID of the resource that the rule evaluated.
**/
export class EvaluationResultQualifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigRuleName" })
  configRuleName?: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: string;
}
