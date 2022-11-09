import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObjectTypeField } from "./objecttypefield";
import { ObjectTypeKey } from "./objecttypekey";


export class PutProfileObjectTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowProfileCreation" })
  allowProfileCreation?: boolean;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=EncryptionKey" })
  encryptionKey?: string;

  @Metadata({ data: "json, name=ExpirationDays" })
  expirationDays?: number;

  @Metadata({ data: "json, name=Fields", elemType: shared.ObjectTypeField })
  fields?: Map<string, ObjectTypeField>;

  @Metadata({ data: "json, name=Keys", elemType: shared.ObjectTypeKey, elemDepth: 2 })
  keys?: Map<string, ObjectTypeKey[]>;

  @Metadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=ObjectTypeName" })
  objectTypeName: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=TemplateId" })
  templateId?: string;
}
