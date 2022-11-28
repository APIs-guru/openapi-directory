import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a data store in Amazon Simple Storage Service (Amazon S3).
**/
export declare class S3Target extends SpeakeasyBase {
    connectionName?: string;
    exclusions?: string[];
    path?: string;
    sampleSize?: number;
}
