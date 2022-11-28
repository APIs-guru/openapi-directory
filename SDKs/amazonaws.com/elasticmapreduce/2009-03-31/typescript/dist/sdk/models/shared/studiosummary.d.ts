import { SpeakeasyBase } from "../../../internal/utils";
import { AuthModeEnum } from "./authmodeenum";
/**
 * Details for an Amazon EMR Studio, including ID, Name, VPC, and Description. The details do not include subnets, IAM roles, security groups, or tags associated with the Studio.
**/
export declare class StudioSummary extends SpeakeasyBase {
    authMode?: AuthModeEnum;
    creationTime?: Date;
    description?: string;
    name?: string;
    studioId?: string;
    url?: string;
    vpcId?: string;
}
