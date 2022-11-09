import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteLocationRequest
/** 
 * DeleteLocation
**/
export class DeleteLocationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LocationArn" })
  locationArn: string;
}
