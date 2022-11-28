import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



export class Locations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locations", elemType: Location })
  locations?: Location[];
}
