import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceAccountCredentials } from "./serviceaccountcredentials";


// DirectoryConfig
/** 
 * Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
**/
export class DirectoryConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: Date;

  @Metadata({ data: "json, name=DirectoryName" })
  directoryName: string;

  @Metadata({ data: "json, name=OrganizationalUnitDistinguishedNames" })
  organizationalUnitDistinguishedNames?: string[];

  @Metadata({ data: "json, name=ServiceAccountCredentials" })
  serviceAccountCredentials?: ServiceAccountCredentials;
}
