import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryNameIdPair } from "./repositorynameidpair";
/**
 * Represents the output of a list repositories operation.
**/
export declare class ListRepositoriesOutput extends SpeakeasyBase {
    nextToken?: string;
    repositories?: RepositoryNameIdPair[];
}
