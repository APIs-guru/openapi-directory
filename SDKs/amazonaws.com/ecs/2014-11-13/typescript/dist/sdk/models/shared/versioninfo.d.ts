import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Docker and Amazon ECS container agent version information about a container instance.
**/
export declare class VersionInfo extends SpeakeasyBase {
    agentHash?: string;
    agentVersion?: string;
    dockerVersion?: string;
}
