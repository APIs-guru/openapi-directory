import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectTypeField } from "./objecttypefield";
import { ObjectTypeKey } from "./objecttypekey";



export class GetProfileObjectTypeTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowProfileCreation" })
  allowProfileCreation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Fields", elemType: ObjectTypeField })
  fields?: Map<string, ObjectTypeField>;

  @SpeakeasyMetadata({ data: "json, name=Keys", elemType: ObjectTypeKey, elemDepth: 2 })
  keys?: Map<string, ObjectTypeKey[]>;

  @SpeakeasyMetadata({ data: "json, name=SourceName" })
  sourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceObject" })
  sourceObject?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateId" })
  templateId?: string;
}
