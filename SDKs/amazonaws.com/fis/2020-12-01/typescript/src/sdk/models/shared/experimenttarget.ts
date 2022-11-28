import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExperimentTargetFilter } from "./experimenttargetfilter";



// ExperimentTarget
/** 
 * Describes a target for an experiment.
**/
export class ExperimentTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: ExperimentTargetFilter })
  filters?: ExperimentTargetFilter[];

  @SpeakeasyMetadata({ data: "json, name=resourceArns" })
  resourceArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=resourceTags" })
  resourceTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=selectionMode" })
  selectionMode?: string;
}
