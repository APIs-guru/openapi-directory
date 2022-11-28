import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteTrailRequest
/** 
 * The request that specifies the name of a trail to delete.
**/
export class DeleteTrailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
