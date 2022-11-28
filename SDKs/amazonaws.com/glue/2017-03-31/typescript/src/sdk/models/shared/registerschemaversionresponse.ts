import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaVersionStatusEnum } from "./schemaversionstatusenum";



export class RegisterSchemaVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SchemaVersionId" })
  schemaVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: SchemaVersionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=VersionNumber" })
  versionNumber?: number;
}
