import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutResourceConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Configuration" })
  configuration: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaVersionId" })
  schemaVersionId: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
