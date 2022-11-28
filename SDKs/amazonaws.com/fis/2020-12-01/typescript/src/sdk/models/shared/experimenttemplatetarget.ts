import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExperimentTemplateTargetFilter } from "./experimenttemplatetargetfilter";



// ExperimentTemplateTarget
/** 
 * Describes a target for an experiment template.
**/
export class ExperimentTemplateTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: ExperimentTemplateTargetFilter })
  filters?: ExperimentTemplateTargetFilter[];

  @SpeakeasyMetadata({ data: "json, name=resourceArns" })
  resourceArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=resourceTags" })
  resourceTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=selectionMode" })
  selectionMode?: string;
}
