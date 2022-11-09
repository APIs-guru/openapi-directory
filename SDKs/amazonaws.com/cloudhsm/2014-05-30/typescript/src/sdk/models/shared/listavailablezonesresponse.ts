import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAvailableZonesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AZList" })
  azList?: string[];
}
