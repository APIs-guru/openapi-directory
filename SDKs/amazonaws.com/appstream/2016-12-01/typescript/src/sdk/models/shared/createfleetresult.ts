import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Fleet } from "./fleet";


export class CreateFleetResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Fleet" })
  fleet?: Fleet;
}
