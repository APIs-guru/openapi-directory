import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnvironmentImage
/** 
 * Information about a Docker image that is managed by CodeBuild.
**/
export class EnvironmentImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=versions" })
  versions?: string[];
}
