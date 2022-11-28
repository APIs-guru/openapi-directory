import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDataCatalogInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
