import { SpeakeasyBase } from "../../../internal/utils";
import { AuthModeEnum } from "./authmodeenum";
import { Tag } from "./tag";
export declare class CreateStudioInput extends SpeakeasyBase {
    authMode: AuthModeEnum;
    defaultS3Location: string;
    description?: string;
    engineSecurityGroupId: string;
    idpAuthUrl?: string;
    idpRelayStateParameterName?: string;
    name: string;
    serviceRole: string;
    subnetIds: string[];
    tags?: Tag[];
    userRole?: string;
    vpcId: string;
    workspaceSecurityGroupId: string;
}
