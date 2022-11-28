import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Update } from "./update";



export class UpdateClusterConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=update" })
  update?: Update;
}
