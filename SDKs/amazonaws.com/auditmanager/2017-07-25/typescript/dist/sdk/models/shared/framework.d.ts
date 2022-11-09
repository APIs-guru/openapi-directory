import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ControlSet } from "./controlset";
import { FrameworkTypeEnum } from "./frameworktypeenum";
/**
 *  The file used to structure and automate Audit Manager assessments for a given compliance standard.
**/
export declare class Framework extends SpeakeasyBase {
    arn?: string;
    complianceType?: string;
    controlSets?: ControlSet[];
    controlSources?: string;
    createdAt?: Date;
    createdBy?: string;
    description?: string;
    id?: string;
    lastUpdatedAt?: Date;
    lastUpdatedBy?: string;
    logo?: string;
    name?: string;
    tags?: Map<string, string>;
    type?: FrameworkTypeEnum;
}
