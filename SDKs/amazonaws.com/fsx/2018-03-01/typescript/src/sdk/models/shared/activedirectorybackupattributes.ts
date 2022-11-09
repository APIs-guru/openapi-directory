import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActiveDirectoryBackupAttributes
/** 
 * The Microsoft AD attributes of the Amazon FSx for Windows File Server file system.
**/
export class ActiveDirectoryBackupAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActiveDirectoryId" })
  activeDirectoryId?: string;

  @Metadata({ data: "json, name=DomainName" })
  domainName?: string;

  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;
}
