import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObjectTypeField } from "./objecttypefield";
import { ObjectTypeKey } from "./objecttypekey";


export class GetProfileObjectTypeTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowProfileCreation" })
  allowProfileCreation?: boolean;

  @Metadata({ data: "json, name=Fields", elemType: shared.ObjectTypeField })
  fields?: Map<string, ObjectTypeField>;

  @Metadata({ data: "json, name=Keys", elemType: shared.ObjectTypeKey, elemDepth: 2 })
  keys?: Map<string, ObjectTypeKey[]>;

  @Metadata({ data: "json, name=SourceName" })
  sourceName?: string;

  @Metadata({ data: "json, name=SourceObject" })
  sourceObject?: string;

  @Metadata({ data: "json, name=TemplateId" })
  templateId?: string;
}
