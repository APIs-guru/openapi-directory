import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataFormatEnum } from "./dataformatenum";
import { SchemaVersionStatusEnum } from "./schemaversionstatusenum";



export class GetSchemaByDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @SpeakeasyMetadata({ data: "json, name=DataFormat" })
  dataFormat?: DataFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=SchemaArn" })
  schemaArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaVersionId" })
  schemaVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: SchemaVersionStatusEnum;
}
