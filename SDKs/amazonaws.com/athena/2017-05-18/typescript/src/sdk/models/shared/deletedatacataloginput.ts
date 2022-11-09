import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDataCatalogInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;
}
