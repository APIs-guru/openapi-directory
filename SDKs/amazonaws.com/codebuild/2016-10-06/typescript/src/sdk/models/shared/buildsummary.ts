import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";
import { ResolvedArtifact } from "./resolvedartifact";



// BuildSummary
/** 
 * Contains summary information about a batch build group.
**/
export class BuildSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=buildStatus" })
  buildStatus?: StatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=primaryArtifact" })
  primaryArtifact?: ResolvedArtifact;

  @SpeakeasyMetadata({ data: "json, name=requestedOn" })
  requestedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=secondaryArtifacts", elemType: ResolvedArtifact })
  secondaryArtifacts?: ResolvedArtifact[];
}
