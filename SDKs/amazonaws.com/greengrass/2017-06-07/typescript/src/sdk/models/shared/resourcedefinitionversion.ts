import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";



// ResourceDefinitionVersion
/** 
 * Information about a resource definition version.
**/
export class ResourceDefinitionVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Resources", elemType: Resource })
  resources?: Resource[];
}
