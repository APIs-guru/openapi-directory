import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageEnum } from "./languageenum";
import { Location } from "./location";
import { MappingEntry } from "./mappingentry";
import { CatalogEntry } from "./catalogentry";
export declare class GetPlanRequest extends SpeakeasyBase {
    additionalPlanOptionsMap?: Map<string, string>;
    language?: LanguageEnum;
    location?: Location;
    mapping: MappingEntry[];
    sinks?: CatalogEntry[];
    source: CatalogEntry;
}
