import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnvironmentImage
/** 
 * Information about a Docker image that is managed by CodeBuild.
**/
export class EnvironmentImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=versions" })
  versions?: string[];
}
