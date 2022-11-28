import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LanguageEnum } from "./languageenum";
import { Location } from "./location";
import { MappingEntry } from "./mappingentry";
import { CatalogEntry } from "./catalogentry";



export class GetPlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalPlanOptionsMap" })
  additionalPlanOptionsMap?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Language" })
  language?: LanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: Location;

  @SpeakeasyMetadata({ data: "json, name=Mapping", elemType: MappingEntry })
  mapping: MappingEntry[];

  @SpeakeasyMetadata({ data: "json, name=Sinks", elemType: CatalogEntry })
  sinks?: CatalogEntry[];

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source: CatalogEntry;
}
