import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteTrailRequest
/** 
 * The request that specifies the name of a trail to delete.
**/
export class DeleteTrailRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
