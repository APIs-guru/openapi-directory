import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryTriggerEventEnumEnum } from "./repositorytriggereventenumenum";
/**
 * Information about a trigger for a repository.
**/
export declare class RepositoryTrigger extends SpeakeasyBase {
    branches?: string[];
    customData?: string;
    destinationArn: string;
    events: RepositoryTriggerEventEnumEnum[];
    name: string;
}
