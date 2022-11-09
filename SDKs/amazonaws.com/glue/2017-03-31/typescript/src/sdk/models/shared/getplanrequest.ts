import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LanguageEnum } from "./languageenum";
import { Location } from "./location";
import { MappingEntry } from "./mappingentry";
import { CatalogEntry } from "./catalogentry";
import { CatalogEntry } from "./catalogentry";


export class GetPlanRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalPlanOptionsMap" })
  additionalPlanOptionsMap?: Map<string, string>;

  @Metadata({ data: "json, name=Language" })
  language?: LanguageEnum;

  @Metadata({ data: "json, name=Location" })
  location?: Location;

  @Metadata({ data: "json, name=Mapping", elemType: shared.MappingEntry })
  mapping: MappingEntry[];

  @Metadata({ data: "json, name=Sinks", elemType: shared.CatalogEntry })
  sinks?: CatalogEntry[];

  @Metadata({ data: "json, name=Source" })
  source: CatalogEntry;
}
