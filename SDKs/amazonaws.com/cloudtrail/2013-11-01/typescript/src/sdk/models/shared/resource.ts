import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Resource
/** 
 * Specifies the type and name of a resource referenced by an event.
**/
export class Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: string;
}
