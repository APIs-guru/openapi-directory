import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { EnvironmentLifecycle } from "./environmentlifecycle";
import { ManagedCredentialsStatusEnum } from "./managedcredentialsstatusenum";
import { EnvironmentTypeEnum } from "./environmenttypeenum";
/**
 * Information about an Cloud9 development environment.
**/
export declare class Environment extends SpeakeasyBase {
    arn: string;
    connectionType?: ConnectionTypeEnum;
    description?: string;
    id?: string;
    lifecycle?: EnvironmentLifecycle;
    managedCredentialsStatus?: ManagedCredentialsStatusEnum;
    name?: string;
    ownerArn: string;
    type: EnvironmentTypeEnum;
}
