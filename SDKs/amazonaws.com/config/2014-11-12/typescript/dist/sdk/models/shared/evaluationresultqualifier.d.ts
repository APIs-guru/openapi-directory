import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifies an Config rule that evaluated an Amazon Web Services resource, and provides the type and ID of the resource that the rule evaluated.
**/
export declare class EvaluationResultQualifier extends SpeakeasyBase {
    configRuleName?: string;
    resourceId?: string;
    resourceType?: string;
}
