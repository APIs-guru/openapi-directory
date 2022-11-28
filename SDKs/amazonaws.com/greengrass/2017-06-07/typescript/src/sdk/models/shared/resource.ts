import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceDataContainer } from "./resourcedatacontainer";



// Resource
/** 
 * Information about a resource.
**/
export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceDataContainer" })
  resourceDataContainer: ResourceDataContainer;
}
