import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VaultTypeEnum {
    UserCreated = "USER_CREATED",
    Personal = "PERSONAL",
    Everyone = "EVERYONE",
    Transfer = "TRANSFER"
}


export class Vault extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeVersion" })
  attributeVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=contentVersion" })
  contentVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=items" })
  items?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: VaultTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
