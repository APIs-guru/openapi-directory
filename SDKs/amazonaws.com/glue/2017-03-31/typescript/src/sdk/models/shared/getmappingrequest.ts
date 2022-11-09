import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Location } from "./location";
import { CatalogEntry } from "./catalogentry";
import { CatalogEntry } from "./catalogentry";


export class GetMappingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Location" })
  location?: Location;

  @Metadata({ data: "json, name=Sinks", elemType: shared.CatalogEntry })
  sinks?: CatalogEntry[];

  @Metadata({ data: "json, name=Source" })
  source: CatalogEntry;
}
