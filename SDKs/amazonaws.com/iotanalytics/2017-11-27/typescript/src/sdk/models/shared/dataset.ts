import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=actions", elemType: shared.DatasetAction })
  actions?: DatasetAction[];

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=contentDeliveryRules", elemType: shared.DatasetContentDeliveryRule })
  contentDeliveryRules?: DatasetContentDeliveryRule[];

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=lateDataRules", elemType: shared.LateDataRule })
  lateDataRules?: LateDataRule[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: RetentionPeriod;

  @Metadata({ data: "json, name=status" })
  status?: DatasetStatusEnum;

  @Metadata({ data: "json, name=triggers", elemType: shared.DatasetTrigger })
  triggers?: DatasetTrigger[];

  @Metadata({ data: "json, name=versioningConfiguration" })
  versioningConfiguration?: VersioningConfiguration;
}
