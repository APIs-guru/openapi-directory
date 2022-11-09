import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Upload } from "./upload";


export class UpdateUploadResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=upload" })
  upload?: Upload;
}
