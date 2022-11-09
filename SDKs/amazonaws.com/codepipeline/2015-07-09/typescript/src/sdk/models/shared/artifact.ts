import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtifactLocation } from "./artifactlocation";


// Artifact
/** 
 * Represents information about an artifact that is worked on by actions in the pipeline.
**/
export class Artifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: ArtifactLocation;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=revision" })
  revision?: string;
}
