import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceDataContainer } from "./resourcedatacontainer";


// Resource
/** 
 * Information about a resource.
**/
export class Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=ResourceDataContainer" })
  resourceDataContainer: ResourceDataContainer;
}
