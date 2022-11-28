import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord } from "./updatesystemmodelsupdatemetricsdataactiveversionbyclientrecord";
import { UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord } from "./updatesystemmodelsupdatemetricsdatacurrentstatebyclientrecord";
import { UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord } from "./updatesystemmodelsupdatemetricsdatapackageerrorsrecord";
/**
 * Model that retrieves the data for UpdateMetrics
**/
export declare class UpdateSystemModelsUpdateMetricsData extends SpeakeasyBase {
    activeVersion?: string;
    activeVersionByClient?: UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord[];
    currentStateByClient?: UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord[];
    cutOffDate?: Date;
    dataRefreshed?: Date;
    filteredClientCount?: number;
    packageErrors?: UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord[];
    totalClientCount?: number;
}
