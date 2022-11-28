import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShareMethodEnum } from "./sharemethodenum";
import { ShareStatusEnum } from "./sharestatusenum";



// SharedDirectory
/** 
 * Details about the shared directory in the directory owner account for which the share request in the directory consumer account has been accepted.
**/
export class SharedDirectory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedDateTime" })
  createdDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=OwnerAccountId" })
  ownerAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerDirectoryId" })
  ownerDirectoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=ShareMethod" })
  shareMethod?: ShareMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=ShareNotes" })
  shareNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=ShareStatus" })
  shareStatus?: ShareStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SharedAccountId" })
  sharedAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=SharedDirectoryId" })
  sharedDirectoryId?: string;
}
