import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSourceEnum } from "./datasourceenum";
export declare class StartContinuousExportResponse extends SpeakeasyBase {
    dataSource?: DataSourceEnum;
    exportId?: string;
    s3Bucket?: string;
    schemaStorageConfig?: Map<string, string>;
    startTime?: Date;
}
