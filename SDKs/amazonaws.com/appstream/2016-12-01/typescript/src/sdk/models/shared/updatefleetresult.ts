import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Fleet } from "./fleet";


export class UpdateFleetResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Fleet" })
  fleet?: Fleet;
}
