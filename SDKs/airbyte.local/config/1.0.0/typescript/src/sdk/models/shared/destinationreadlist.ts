import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinationRead } from "./destinationread";



export class DestinationReadList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinations", elemType: DestinationRead })
  destinations: DestinationRead[];
}
