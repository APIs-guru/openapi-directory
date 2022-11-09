import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConnectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=HidePassword" })
  hidePassword?: boolean;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
