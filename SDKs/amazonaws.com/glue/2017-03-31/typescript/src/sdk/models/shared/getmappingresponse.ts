import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MappingEntry } from "./mappingentry";



export class GetMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Mapping", elemType: MappingEntry })
  mapping: MappingEntry[];
}
