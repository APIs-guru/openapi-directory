import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessPreview } from "./accesspreview";


export class GetAccessPreviewResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessPreview" })
  accessPreview: AccessPreview;
}
