import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BuildNotDeleted
/** 
 * Information about a build that could not be successfully deleted.
**/
export class BuildNotDeleted extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: string;
}
