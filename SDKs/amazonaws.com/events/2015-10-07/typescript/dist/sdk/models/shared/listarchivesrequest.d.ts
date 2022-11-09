import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ArchiveStateEnum } from "./archivestateenum";
export declare class ListArchivesRequest extends SpeakeasyBase {
    eventSourceArn?: string;
    limit?: number;
    namePrefix?: string;
    nextToken?: string;
    state?: ArchiveStateEnum;
}
