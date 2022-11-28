import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Resource
/** 
 * Specifies the type and name of a resource referenced by an event.
**/
export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: string;
}
