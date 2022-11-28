import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Fleet } from "./fleet";



export class UpdateFleetResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Fleet" })
  fleet?: Fleet;
}
