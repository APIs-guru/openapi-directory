import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetAction } from "./datasetaction";
import { DatasetContentDeliveryRule } from "./datasetcontentdeliveryrule";
import { LateDataRule } from "./latedatarule";
import { RetentionPeriod } from "./retentionperiod";
import { DatasetStatusEnum } from "./datasetstatusenum";
import { DatasetTrigger } from "./datasettrigger";
import { VersioningConfiguration } from "./versioningconfiguration";



// Dataset
/** 
 * Information about a dataset.
**/
export class Dataset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: DatasetAction })
  actions?: DatasetAction[];

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=contentDeliveryRules", elemType: DatasetContentDeliveryRule })
  contentDeliveryRules?: DatasetContentDeliveryRule[];

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lateDataRules", elemType: LateDataRule })
  lateDataRules?: LateDataRule[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: RetentionPeriod;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DatasetStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=triggers", elemType: DatasetTrigger })
  triggers?: DatasetTrigger[];

  @SpeakeasyMetadata({ data: "json, name=versioningConfiguration" })
  versioningConfiguration?: VersioningConfiguration;
}
