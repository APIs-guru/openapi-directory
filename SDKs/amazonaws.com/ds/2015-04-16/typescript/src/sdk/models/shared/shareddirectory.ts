import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShareMethodEnum } from "./sharemethodenum";
import { ShareStatusEnum } from "./sharestatusenum";


// SharedDirectory
/** 
 * Details about the shared directory in the directory owner account for which the share request in the directory consumer account has been accepted.
**/
export class SharedDirectory extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedDateTime" })
  createdDateTime?: Date;

  @Metadata({ data: "json, name=LastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=OwnerAccountId" })
  ownerAccountId?: string;

  @Metadata({ data: "json, name=OwnerDirectoryId" })
  ownerDirectoryId?: string;

  @Metadata({ data: "json, name=ShareMethod" })
  shareMethod?: ShareMethodEnum;

  @Metadata({ data: "json, name=ShareNotes" })
  shareNotes?: string;

  @Metadata({ data: "json, name=ShareStatus" })
  shareStatus?: ShareStatusEnum;

  @Metadata({ data: "json, name=SharedAccountId" })
  sharedAccountId?: string;

  @Metadata({ data: "json, name=SharedDirectoryId" })
  sharedDirectoryId?: string;
}
