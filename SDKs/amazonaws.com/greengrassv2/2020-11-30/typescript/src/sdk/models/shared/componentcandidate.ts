import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComponentCandidate
/** 
 * Contains information about a component that is a candidate to deploy to a Greengrass core device.
**/
export class ComponentCandidate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentName" })
  componentName?: string;

  @SpeakeasyMetadata({ data: "json, name=componentVersion" })
  componentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=versionRequirements" })
  versionRequirements?: Map<string, string>;
}
