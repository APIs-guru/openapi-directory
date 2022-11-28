import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UploadTypeEnum } from "./uploadtypeenum";



// ListUploadsRequest
/** 
 * Represents a request to the list uploads operation.
**/
export class ListUploadsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UploadTypeEnum;
}
