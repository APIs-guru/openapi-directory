import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetAction } from "./datasetaction";
import { DatasetContentDeliveryRule } from "./datasetcontentdeliveryrule";
import { LateDataRule } from "./latedatarule";
import { RetentionPeriod } from "./retentionperiod";
import { DatasetStatusEnum } from "./datasetstatusenum";
import { DatasetTrigger } from "./datasettrigger";
import { VersioningConfiguration } from "./versioningconfiguration";
/**
 * Information about a dataset.
**/
export declare class Dataset extends SpeakeasyBase {
    actions?: DatasetAction[];
    arn?: string;
    contentDeliveryRules?: DatasetContentDeliveryRule[];
    creationTime?: Date;
    lastUpdateTime?: Date;
    lateDataRules?: LateDataRule[];
    name?: string;
    retentionPeriod?: RetentionPeriod;
    status?: DatasetStatusEnum;
    triggers?: DatasetTrigger[];
    versioningConfiguration?: VersioningConfiguration;
}
