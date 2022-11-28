import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BuildNotDeleted
/** 
 * Information about a build that could not be successfully deleted.
**/
export class BuildNotDeleted extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: string;
}
