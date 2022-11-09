import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UploadTypeEnum } from "./uploadtypeenum";


// ListUploadsRequest
/** 
 * Represents a request to the list uploads operation.
**/
export class ListUploadsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=type" })
  type?: UploadTypeEnum;
}
