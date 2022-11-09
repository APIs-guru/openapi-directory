import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataFormatEnum } from "./dataformatenum";
import { SchemaVersionStatusEnum } from "./schemaversionstatusenum";


export class GetSchemaByDefinitionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @Metadata({ data: "json, name=DataFormat" })
  dataFormat?: DataFormatEnum;

  @Metadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @Metadata({ data: "json, name=SchemaVersionId" })
  schemaVersionId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: SchemaVersionStatusEnum;
}
