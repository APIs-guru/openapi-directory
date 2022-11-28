import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAvailableZonesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AZList" })
  azList?: string[];
}
