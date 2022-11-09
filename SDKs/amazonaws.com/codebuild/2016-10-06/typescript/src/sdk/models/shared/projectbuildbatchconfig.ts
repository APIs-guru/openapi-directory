import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchRestrictions } from "./batchrestrictions";


// ProjectBuildBatchConfig
/** 
 * Contains configuration information about a batch build project.
**/
export class ProjectBuildBatchConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=combineArtifacts" })
  combineArtifacts?: boolean;

  @Metadata({ data: "json, name=restrictions" })
  restrictions?: BatchRestrictions;

  @Metadata({ data: "json, name=serviceRole" })
  serviceRole?: string;

  @Metadata({ data: "json, name=timeoutInMins" })
  timeoutInMins?: number;
}
