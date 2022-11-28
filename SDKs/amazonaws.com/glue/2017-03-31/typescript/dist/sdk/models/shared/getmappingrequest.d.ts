import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
import { CatalogEntry } from "./catalogentry";
export declare class GetMappingRequest extends SpeakeasyBase {
    location?: Location;
    sinks?: CatalogEntry[];
    source: CatalogEntry;
}
