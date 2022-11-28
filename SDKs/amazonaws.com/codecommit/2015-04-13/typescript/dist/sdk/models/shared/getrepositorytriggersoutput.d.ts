import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryTrigger } from "./repositorytrigger";
/**
 * Represents the output of a get repository triggers operation.
**/
export declare class GetRepositoryTriggersOutput extends SpeakeasyBase {
    configurationId?: string;
    triggers?: RepositoryTrigger[];
}
