import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UploadTypeEnum } from "./uploadtypeenum";



// CreateUploadRequest
/** 
 * Represents a request to the create upload operation.
**/
export class CreateUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=projectArn" })
  projectArn: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: UploadTypeEnum;
}
