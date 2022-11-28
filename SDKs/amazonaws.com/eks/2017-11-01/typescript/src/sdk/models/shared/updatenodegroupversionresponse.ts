import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Update } from "./update";



export class UpdateNodegroupVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=update" })
  update?: Update;
}
