import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceAccountCredentials
/** 
 * Describes the credentials for the service account used by the fleet or image builder to connect to the directory.
**/
export class ServiceAccountCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountName" })
  accountName: string;

  @SpeakeasyMetadata({ data: "json, name=AccountPassword" })
  accountPassword: string;
}
