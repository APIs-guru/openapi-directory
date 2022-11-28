import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceAccountCredentials } from "./serviceaccountcredentials";



// DirectoryConfig
/** 
 * Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
**/
export class DirectoryConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DirectoryName" })
  directoryName: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationalUnitDistinguishedNames" })
  organizationalUnitDistinguishedNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=ServiceAccountCredentials" })
  serviceAccountCredentials?: ServiceAccountCredentials;
}
