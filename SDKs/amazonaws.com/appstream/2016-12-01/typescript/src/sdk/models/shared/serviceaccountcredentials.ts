import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceAccountCredentials
/** 
 * Describes the credentials for the service account used by the fleet or image builder to connect to the directory.
**/
export class ServiceAccountCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountName" })
  accountName: string;

  @Metadata({ data: "json, name=AccountPassword" })
  accountPassword: string;
}
