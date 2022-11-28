import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExperimentTemplateTargetInputFilter } from "./experimenttemplatetargetinputfilter";



// CreateExperimentTemplateTargetInput
/** 
 * Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both ARNs and tags.
**/
export class CreateExperimentTemplateTargetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: ExperimentTemplateTargetInputFilter })
  filters?: ExperimentTemplateTargetInputFilter[];

  @SpeakeasyMetadata({ data: "json, name=resourceArns" })
  resourceArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=resourceTags" })
  resourceTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType: string;

  @SpeakeasyMetadata({ data: "json, name=selectionMode" })
  selectionMode: string;
}
