import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UploadTypeEnum } from "./uploadtypeenum";


// CreateUploadRequest
/** 
 * Represents a request to the create upload operation.
**/
export class CreateUploadRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentType" })
  contentType?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=projectArn" })
  projectArn: string;

  @Metadata({ data: "json, name=type" })
  type: UploadTypeEnum;
}
