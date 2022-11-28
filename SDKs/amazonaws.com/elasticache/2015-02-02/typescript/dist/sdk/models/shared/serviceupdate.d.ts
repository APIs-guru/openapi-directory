import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceUpdateSeverityEnum } from "./serviceupdateseverityenum";
import { ServiceUpdateStatusEnum } from "./serviceupdatestatusenum";
import { ServiceUpdateTypeEnum } from "./serviceupdatetypeenum";
/**
 * An update that you can apply to your Redis clusters.
**/
export declare class ServiceUpdate extends SpeakeasyBase {
    autoUpdateAfterRecommendedApplyByDate?: boolean;
    engine?: string;
    engineVersion?: string;
    estimatedUpdateTime?: string;
    serviceUpdateDescription?: string;
    serviceUpdateEndDate?: Date;
    serviceUpdateName?: string;
    serviceUpdateRecommendedApplyByDate?: Date;
    serviceUpdateReleaseDate?: Date;
    serviceUpdateSeverity?: ServiceUpdateSeverityEnum;
    serviceUpdateStatus?: ServiceUpdateStatusEnum;
    serviceUpdateType?: ServiceUpdateTypeEnum;
}
