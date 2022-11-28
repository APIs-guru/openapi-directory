import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute } from "./contentsubmissionsharedbusinessentitiescontentdefinitionattribute";



export class ContentSubmissionSharedBusinessEntitiesContentDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute })
  attributes?: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute[];

  @SpeakeasyMetadata({ data: "json, name=ContentDefinitionID" })
  contentDefinitionId?: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PackageTypeID" })
  packageTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=TypeID" })
  typeId?: number;
}
