import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Resource
/** 
 * Information about a resource for a project.
**/
export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
