import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Upload } from "./upload";


// ListUploadsResult
/** 
 * Represents the result of a list uploads request.
**/
export class ListUploadsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=uploads", elemType: shared.Upload })
  uploads?: Upload[];
}
