import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Upload } from "./upload";



// ListUploadsResult
/** 
 * Represents the result of a list uploads request.
**/
export class ListUploadsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=uploads", elemType: Upload })
  uploads?: Upload[];
}
