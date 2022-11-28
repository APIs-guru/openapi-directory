import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDataCatalogInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
