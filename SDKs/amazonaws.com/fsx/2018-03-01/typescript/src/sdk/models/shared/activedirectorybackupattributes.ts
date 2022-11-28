import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActiveDirectoryBackupAttributes
/** 
 * The Microsoft AD attributes of the Amazon FSx for Windows File Server file system.
**/
export class ActiveDirectoryBackupAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActiveDirectoryId" })
  activeDirectoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;
}
