import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchRestrictions } from "./batchrestrictions";



// ProjectBuildBatchConfig
/** 
 * Contains configuration information about a batch build project.
**/
export class ProjectBuildBatchConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=combineArtifacts" })
  combineArtifacts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=restrictions" })
  restrictions?: BatchRestrictions;

  @SpeakeasyMetadata({ data: "json, name=serviceRole" })
  serviceRole?: string;

  @SpeakeasyMetadata({ data: "json, name=timeoutInMins" })
  timeoutInMins?: number;
}
