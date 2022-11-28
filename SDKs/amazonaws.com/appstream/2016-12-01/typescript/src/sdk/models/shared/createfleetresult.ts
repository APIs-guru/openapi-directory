import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Fleet } from "./fleet";



export class CreateFleetResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Fleet" })
  fleet?: Fleet;
}
