import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ArchiveStateEnum } from "./archivestateenum";
export declare class UpdateArchiveResponse extends SpeakeasyBase {
    archiveArn?: string;
    creationTime?: Date;
    state?: ArchiveStateEnum;
    stateReason?: string;
}
