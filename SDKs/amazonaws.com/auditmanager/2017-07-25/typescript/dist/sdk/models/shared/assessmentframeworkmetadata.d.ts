import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FrameworkTypeEnum } from "./frameworktypeenum";
/**
 *  The metadata associated with a standard or custom framework.
**/
export declare class AssessmentFrameworkMetadata extends SpeakeasyBase {
    arn?: string;
    complianceType?: string;
    controlSetsCount?: number;
    controlsCount?: number;
    createdAt?: Date;
    description?: string;
    id?: string;
    lastUpdatedAt?: Date;
    logo?: string;
    name?: string;
    type?: FrameworkTypeEnum;
}
