import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchemaId } from "./schemaid";



export class ListSchemaVersionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaId" })
  schemaId: SchemaId;
}
