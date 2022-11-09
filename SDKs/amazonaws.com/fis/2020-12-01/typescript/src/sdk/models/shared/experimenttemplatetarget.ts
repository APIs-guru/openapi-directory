import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExperimentTemplateTargetFilter } from "./experimenttemplatetargetfilter";


// ExperimentTemplateTarget
/** 
 * Describes a target for an experiment template.
**/
export class ExperimentTemplateTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.ExperimentTemplateTargetFilter })
  filters?: ExperimentTemplateTargetFilter[];

  @Metadata({ data: "json, name=resourceArns" })
  resourceArns?: string[];

  @Metadata({ data: "json, name=resourceTags" })
  resourceTags?: Map<string, string>;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=selectionMode" })
  selectionMode?: string;
}
