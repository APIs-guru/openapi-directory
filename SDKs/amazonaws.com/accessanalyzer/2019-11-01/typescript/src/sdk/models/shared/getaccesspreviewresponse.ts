import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessPreview } from "./accesspreview";



export class GetAccessPreviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessPreview" })
  accessPreview: AccessPreview;
}
