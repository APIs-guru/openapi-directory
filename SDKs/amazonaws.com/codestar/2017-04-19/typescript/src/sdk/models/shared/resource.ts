import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Resource
/** 
 * Information about a resource for a project.
**/
export class Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}
