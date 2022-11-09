import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExperimentTargetFilter } from "./experimenttargetfilter";


// ExperimentTarget
/** 
 * Describes a target for an experiment.
**/
export class ExperimentTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.ExperimentTargetFilter })
  filters?: ExperimentTargetFilter[];

  @Metadata({ data: "json, name=resourceArns" })
  resourceArns?: string[];

  @Metadata({ data: "json, name=resourceTags" })
  resourceTags?: Map<string, string>;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=selectionMode" })
  selectionMode?: string;
}
