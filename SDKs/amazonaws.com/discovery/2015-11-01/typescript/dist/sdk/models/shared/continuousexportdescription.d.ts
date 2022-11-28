import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceEnum } from "./datasourceenum";
import { ContinuousExportStatusEnum } from "./continuousexportstatusenum";
/**
 * A list of continuous export descriptions.
**/
export declare class ContinuousExportDescription extends SpeakeasyBase {
    dataSource?: DataSourceEnum;
    exportId?: string;
    s3Bucket?: string;
    schemaStorageConfig?: Map<string, string>;
    startTime?: Date;
    status?: ContinuousExportStatusEnum;
    statusDetail?: string;
    stopTime?: Date;
}
