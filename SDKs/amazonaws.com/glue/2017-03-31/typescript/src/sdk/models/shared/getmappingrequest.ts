import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
import { CatalogEntry } from "./catalogentry";



export class GetMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: Location;

  @SpeakeasyMetadata({ data: "json, name=Sinks", elemType: CatalogEntry })
  sinks?: CatalogEntry[];

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source: CatalogEntry;
}
