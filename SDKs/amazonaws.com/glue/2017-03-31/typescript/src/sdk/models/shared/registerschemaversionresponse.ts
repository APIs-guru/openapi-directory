import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchemaVersionStatusEnum } from "./schemaversionstatusenum";


export class RegisterSchemaVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SchemaVersionId" })
  schemaVersionId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: SchemaVersionStatusEnum;

  @Metadata({ data: "json, name=VersionNumber" })
  versionNumber?: number;
}
