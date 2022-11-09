import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetadataInfo } from "./metadatainfo";


export class QuerySchemaVersionMetadataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MetadataInfoMap", elemType: shared.MetadataInfo })
  metadataInfoMap?: Map<string, MetadataInfo>;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SchemaVersionId" })
  schemaVersionId?: string;
}
