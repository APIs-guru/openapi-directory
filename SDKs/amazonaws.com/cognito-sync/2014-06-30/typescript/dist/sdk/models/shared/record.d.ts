import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The basic data structure of a dataset.
**/
export declare class Record extends SpeakeasyBase {
    deviceLastModifiedDate?: Date;
    key?: string;
    lastModifiedBy?: string;
    lastModifiedDate?: Date;
    syncCount?: number;
    value?: string;
}
