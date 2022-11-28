import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SamlConfigurationPropertyItemsBoolean } from "./samlconfigurationpropertyitemsboolean";
import { SamlConfigurationPropertyItemsString } from "./samlconfigurationpropertyitemsstring";
import { SamlConfigurationPropertyItemsLong } from "./samlconfigurationpropertyitemslong";
import { SamlConfigurationPropertyItemsArray } from "./samlconfigurationpropertyitemsarray";



export class SamlConfigurationProperties extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addGroupMemberships?: SamlConfigurationPropertyItemsBoolean;

  @SpeakeasyMetadata()
  assertionConsumerServiceUrl?: SamlConfigurationPropertyItemsString;

  @SpeakeasyMetadata()
  clockTolerance?: SamlConfigurationPropertyItemsLong;

  @SpeakeasyMetadata()
  createUser?: SamlConfigurationPropertyItemsBoolean;

  @SpeakeasyMetadata()
  defaultGroups?: SamlConfigurationPropertyItemsArray;

  @SpeakeasyMetadata()
  defaultRedirectUrl?: SamlConfigurationPropertyItemsString;

  @SpeakeasyMetadata()
  digestMethod?: SamlConfigurationPropertyItemsString;

  @SpeakeasyMetadata()
  groupMembershipAttribute?: SamlConfigurationPropertyItemsString;

  @SpeakeasyMetadata()
  handleLogout?: SamlConfigurationPropertyItemsBoolean;

  @SpeakeasyMetadata()
  idpCertAlias?: SamlConfigurationPropertyItemsString;

  @SpeakeasyMetadata()
  idpHttpRedirect?: SamlConfigurationPropertyItemsBoolean;

  @SpeakeasyMetadata()
  idpUrl?: SamlConfigurationPropertyItemsString;

  @SpeakeasyMetadata()
  keyStorePassword?: SamlConfigurationPropertyItemsString;

  @SpeakeasyMetadata()
  logoutUrl?: SamlConfigurationPropertyItemsString;

  @SpeakeasyMetadata()
  nameIdFormat?: SamlConfigurationPropertyItemsString;

  @SpeakeasyMetadata()
  path?: SamlConfigurationPropertyItemsArray;

  @SpeakeasyMetadata()
  serviceRanking?: SamlConfigurationPropertyItemsLong;

  @SpeakeasyMetadata()
  serviceProviderEntityId?: SamlConfigurationPropertyItemsString;

  @SpeakeasyMetadata()
  signatureMethod?: SamlConfigurationPropertyItemsString;

  @SpeakeasyMetadata()
  spPrivateKeyAlias?: SamlConfigurationPropertyItemsString;

  @SpeakeasyMetadata()
  synchronizeAttributes?: SamlConfigurationPropertyItemsArray;

  @SpeakeasyMetadata()
  useEncryption?: SamlConfigurationPropertyItemsBoolean;

  @SpeakeasyMetadata()
  userIdAttribute?: SamlConfigurationPropertyItemsString;

  @SpeakeasyMetadata()
  userIntermediatePath?: SamlConfigurationPropertyItemsString;
}
