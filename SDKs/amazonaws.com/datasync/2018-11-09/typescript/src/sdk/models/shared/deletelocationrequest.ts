import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteLocationRequest
/** 
 * DeleteLocation
**/
export class DeleteLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LocationArn" })
  locationArn: string;
}
