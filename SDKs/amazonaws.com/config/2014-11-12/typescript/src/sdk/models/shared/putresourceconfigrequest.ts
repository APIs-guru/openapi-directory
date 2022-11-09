import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutResourceConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Configuration" })
  configuration: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=ResourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType: string;

  @Metadata({ data: "json, name=SchemaVersionId" })
  schemaVersionId: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
