import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Update } from "./update";


export class UpdateClusterVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=update" })
  update?: Update;
}
