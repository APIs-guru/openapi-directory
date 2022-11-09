import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StatusTypeEnum } from "./statustypeenum";
import { ResolvedArtifact } from "./resolvedartifact";
import { ResolvedArtifact } from "./resolvedartifact";


// BuildSummary
/** 
 * Contains summary information about a batch build group.
**/
export class BuildSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=buildStatus" })
  buildStatus?: StatusTypeEnum;

  @Metadata({ data: "json, name=primaryArtifact" })
  primaryArtifact?: ResolvedArtifact;

  @Metadata({ data: "json, name=requestedOn" })
  requestedOn?: Date;

  @Metadata({ data: "json, name=secondaryArtifacts", elemType: shared.ResolvedArtifact })
  secondaryArtifacts?: ResolvedArtifact[];
}
