import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ComponentCandidate
/** 
 * Contains information about a component that is a candidate to deploy to a Greengrass core device.
**/
export class ComponentCandidate extends SpeakeasyBase {
  @Metadata({ data: "json, name=componentName" })
  componentName?: string;

  @Metadata({ data: "json, name=componentVersion" })
  componentVersion?: string;

  @Metadata({ data: "json, name=versionRequirements" })
  versionRequirements?: Map<string, string>;
}
