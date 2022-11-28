import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord } from "./updatesystemmodelsupdatemetricsdataactiveversionbyclientrecord";
import { UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord } from "./updatesystemmodelsupdatemetricsdatacurrentstatebyclientrecord";
import { UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord } from "./updatesystemmodelsupdatemetricsdatapackageerrorsrecord";



// UpdateSystemModelsUpdateMetricsData
/** 
 * Model that retrieves the data for UpdateMetrics
**/
export class UpdateSystemModelsUpdateMetricsData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActiveVersion" })
  activeVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=ActiveVersionByClient", elemType: UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord })
  activeVersionByClient?: UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord[];

  @SpeakeasyMetadata({ data: "json, name=CurrentStateByClient", elemType: UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord })
  currentStateByClient?: UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord[];

  @SpeakeasyMetadata({ data: "json, name=CutOffDate" })
  cutOffDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DataRefreshed" })
  dataRefreshed?: Date;

  @SpeakeasyMetadata({ data: "json, name=FilteredClientCount" })
  filteredClientCount?: number;

  @SpeakeasyMetadata({ data: "json, name=PackageErrors", elemType: UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord })
  packageErrors?: UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord[];

  @SpeakeasyMetadata({ data: "json, name=TotalClientCount" })
  totalClientCount?: number;
}
