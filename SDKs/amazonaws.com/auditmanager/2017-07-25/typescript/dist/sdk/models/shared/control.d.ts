import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ControlMappingSource } from "./controlmappingsource";
import { ControlTypeEnum } from "./controltypeenum";
/**
 *  A control in Audit Manager.
**/
export declare class Control extends SpeakeasyBase {
    actionPlanInstructions?: string;
    actionPlanTitle?: string;
    arn?: string;
    controlMappingSources?: ControlMappingSource[];
    controlSources?: string;
    createdAt?: Date;
    createdBy?: string;
    description?: string;
    id?: string;
    lastUpdatedAt?: Date;
    lastUpdatedBy?: string;
    name?: string;
    tags?: Map<string, string>;
    testingInformation?: string;
    type?: ControlTypeEnum;
}
