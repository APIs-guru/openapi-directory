import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VaultTypeEnum {
    UserCreated = "USER_CREATED"
,    Personal = "PERSONAL"
,    Everyone = "EVERYONE"
,    Transfer = "TRANSFER"
}


export class Vault extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeVersion" })
  attributeVersion?: number;

  @Metadata({ data: "json, name=contentVersion" })
  contentVersion?: number;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=items" })
  items?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: VaultTypeEnum;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
