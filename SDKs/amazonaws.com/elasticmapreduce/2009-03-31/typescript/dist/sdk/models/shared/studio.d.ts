import { SpeakeasyBase } from "../../../internal/utils";
import { AuthModeEnum } from "./authmodeenum";
import { Tag } from "./tag";
/**
 * Details for an Amazon EMR Studio including ID, creation time, name, and so on.
**/
export declare class Studio extends SpeakeasyBase {
    authMode?: AuthModeEnum;
    creationTime?: Date;
    defaultS3Location?: string;
    description?: string;
    engineSecurityGroupId?: string;
    idpAuthUrl?: string;
    idpRelayStateParameterName?: string;
    name?: string;
    serviceRole?: string;
    studioArn?: string;
    studioId?: string;
    subnetIds?: string[];
    tags?: Tag[];
    url?: string;
    userRole?: string;
    vpcId?: string;
    workspaceSecurityGroupId?: string;
}
