import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryTrigger } from "./repositorytrigger";
/**
 * Represents the input of a put repository triggers operation.
**/
export declare class PutRepositoryTriggersInput extends SpeakeasyBase {
    repositoryName: string;
    triggers: RepositoryTrigger[];
}
