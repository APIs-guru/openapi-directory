import { SpeakeasyBase } from "../../../internal/utils";
import { ShareMethodEnum } from "./sharemethodenum";
import { ShareStatusEnum } from "./sharestatusenum";
/**
 * Details about the shared directory in the directory owner account for which the share request in the directory consumer account has been accepted.
**/
export declare class SharedDirectory extends SpeakeasyBase {
    createdDateTime?: Date;
    lastUpdatedDateTime?: Date;
    ownerAccountId?: string;
    ownerDirectoryId?: string;
    shareMethod?: ShareMethodEnum;
    shareNotes?: string;
    shareStatus?: ShareStatusEnum;
    sharedAccountId?: string;
    sharedDirectoryId?: string;
}
