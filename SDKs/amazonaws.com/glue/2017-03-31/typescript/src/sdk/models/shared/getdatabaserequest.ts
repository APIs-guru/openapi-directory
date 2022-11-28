import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
