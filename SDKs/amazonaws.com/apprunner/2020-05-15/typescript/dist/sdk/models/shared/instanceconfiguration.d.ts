import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the runtime configuration of an AWS App Runner service instance (scaling unit).
**/
export declare class InstanceConfiguration extends SpeakeasyBase {
    cpu?: string;
    instanceRoleArn?: string;
    memory?: string;
}
