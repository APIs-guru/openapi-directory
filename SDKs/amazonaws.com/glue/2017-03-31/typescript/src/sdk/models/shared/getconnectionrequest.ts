import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=HidePassword" })
  hidePassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
