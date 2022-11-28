import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtifactLocation } from "./artifactlocation";



// Artifact
/** 
 * Represents information about an artifact that is worked on by actions in the pipeline.
**/
export class Artifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: ArtifactLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;
}
