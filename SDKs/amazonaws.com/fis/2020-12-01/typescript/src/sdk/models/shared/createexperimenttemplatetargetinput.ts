import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExperimentTemplateTargetInputFilter } from "./experimenttemplatetargetinputfilter";


// CreateExperimentTemplateTargetInput
/** 
 * Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both ARNs and tags.
**/
export class CreateExperimentTemplateTargetInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.ExperimentTemplateTargetInputFilter })
  filters?: ExperimentTemplateTargetInputFilter[];

  @Metadata({ data: "json, name=resourceArns" })
  resourceArns?: string[];

  @Metadata({ data: "json, name=resourceTags" })
  resourceTags?: Map<string, string>;

  @Metadata({ data: "json, name=resourceType" })
  resourceType: string;

  @Metadata({ data: "json, name=selectionMode" })
  selectionMode: string;
}
