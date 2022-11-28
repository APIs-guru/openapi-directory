import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetadataInfo } from "./metadatainfo";



export class QuerySchemaVersionMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetadataInfoMap", elemType: MetadataInfo })
  metadataInfoMap?: Map<string, MetadataInfo>;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaVersionId" })
  schemaVersionId?: string;
}
