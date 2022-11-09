import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Resource } from "./resource";


// ResourceDefinitionVersion
/** 
 * Information about a resource definition version.
**/
export class ResourceDefinitionVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=Resources", elemType: shared.Resource })
  resources?: Resource[];
}
