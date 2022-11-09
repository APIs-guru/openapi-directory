import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteConnectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=ConnectionName" })
  connectionName: string;
}
