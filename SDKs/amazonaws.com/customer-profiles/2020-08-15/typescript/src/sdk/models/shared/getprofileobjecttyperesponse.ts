import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectTypeField } from "./objecttypefield";
import { ObjectTypeKey } from "./objecttypekey";



export class GetProfileObjectTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowProfileCreation" })
  allowProfileCreation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=EncryptionKey" })
  encryptionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpirationDays" })
  expirationDays?: number;

  @SpeakeasyMetadata({ data: "json, name=Fields", elemType: ObjectTypeField })
  fields?: Map<string, ObjectTypeField>;

  @SpeakeasyMetadata({ data: "json, name=Keys", elemType: ObjectTypeKey, elemDepth: 2 })
  keys?: Map<string, ObjectTypeKey[]>;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=ObjectTypeName" })
  objectTypeName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=TemplateId" })
  templateId?: string;
}
