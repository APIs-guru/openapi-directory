import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute } from "./contentsubmissionsharedbusinessentitiescontentdefinitionattribute";


export class ContentSubmissionSharedBusinessEntitiesContentDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attributes", elemType: shared.ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute })
  attributes?: ContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute[];

  @Metadata({ data: "json, name=ContentDefinitionID" })
  contentDefinitionId?: number;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PackageTypeID" })
  packageTypeId?: string;

  @Metadata({ data: "json, name=TypeID" })
  typeId?: number;
}
