import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord } from "./updatesystemmodelsupdatemetricsdataactiveversionbyclientrecord";
import { UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord } from "./updatesystemmodelsupdatemetricsdatacurrentstatebyclientrecord";
import { UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord } from "./updatesystemmodelsupdatemetricsdatapackageerrorsrecord";


// UpdateSystemModelsUpdateMetricsData
/** 
 * Model that retrieves the data for UpdateMetrics
**/
export class UpdateSystemModelsUpdateMetricsData extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActiveVersion" })
  activeVersion?: string;

  @Metadata({ data: "json, name=ActiveVersionByClient", elemType: shared.UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord })
  activeVersionByClient?: UpdateSystemModelsUpdateMetricsDataActiveVersionByClientRecord[];

  @Metadata({ data: "json, name=CurrentStateByClient", elemType: shared.UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord })
  currentStateByClient?: UpdateSystemModelsUpdateMetricsDataCurrentStateByClientRecord[];

  @Metadata({ data: "json, name=CutOffDate" })
  cutOffDate?: Date;

  @Metadata({ data: "json, name=DataRefreshed" })
  dataRefreshed?: Date;

  @Metadata({ data: "json, name=FilteredClientCount" })
  filteredClientCount?: number;

  @Metadata({ data: "json, name=PackageErrors", elemType: shared.UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord })
  packageErrors?: UpdateSystemModelsUpdateMetricsDataPackageErrorsRecord[];

  @Metadata({ data: "json, name=TotalClientCount" })
  totalClientCount?: number;
}
