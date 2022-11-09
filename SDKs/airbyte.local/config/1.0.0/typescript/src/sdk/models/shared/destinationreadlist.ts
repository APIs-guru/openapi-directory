import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DestinationRead } from "./destinationread";


export class DestinationReadList extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations", elemType: shared.DestinationRead })
  destinations: DestinationRead[];
}
