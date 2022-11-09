import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Location } from "./location";


export class Locations extends SpeakeasyBase {
  @Metadata({ data: "json, name=locations", elemType: shared.Location })
  locations?: Location[];
}
