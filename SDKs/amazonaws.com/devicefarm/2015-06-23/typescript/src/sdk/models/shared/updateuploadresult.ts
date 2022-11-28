import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Upload } from "./upload";



export class UpdateUploadResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=upload" })
  upload?: Upload;
}
