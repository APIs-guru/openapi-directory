import { SpeakeasyBase } from "../../../internal/utils/utils";
import { OperationEnum } from "./operationenum";
/**
 * An update operation for a record.
**/
export declare class RecordPatch extends SpeakeasyBase {
    deviceLastModifiedDate?: Date;
    key: string;
    op: OperationEnum;
    syncCount: number;
    value?: string;
}
