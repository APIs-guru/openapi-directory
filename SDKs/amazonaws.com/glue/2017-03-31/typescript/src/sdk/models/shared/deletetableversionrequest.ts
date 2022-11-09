import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTableVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;

  @Metadata({ data: "json, name=VersionId" })
  versionId: string;
}
