import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MappingEntry } from "./mappingentry";


export class GetMappingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Mapping", elemType: shared.MappingEntry })
  mapping: MappingEntry[];
}
