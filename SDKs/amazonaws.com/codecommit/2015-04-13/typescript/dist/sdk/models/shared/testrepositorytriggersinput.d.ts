import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryTrigger } from "./repositorytrigger";
/**
 * Represents the input of a test repository triggers operation.
**/
export declare class TestRepositoryTriggersInput extends SpeakeasyBase {
    repositoryName: string;
    triggers: RepositoryTrigger[];
}
