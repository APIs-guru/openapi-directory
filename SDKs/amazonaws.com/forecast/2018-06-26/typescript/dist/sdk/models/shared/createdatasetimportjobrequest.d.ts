import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
import { Tag } from "./tag";
export declare class CreateDatasetImportJobRequest extends SpeakeasyBase {
    dataSource: DataSource;
    datasetArn: string;
    datasetImportJobName: string;
    geolocationFormat?: string;
    tags?: Tag[];
    timeZone?: string;
    timestampFormat?: string;
    useGeolocationForTimeZone?: boolean;
}
