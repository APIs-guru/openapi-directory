import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a create repository operation.
**/
export declare class CreateRepositoryInput extends SpeakeasyBase {
    repositoryDescription?: string;
    repositoryName: string;
    tags?: Map<string, string>;
}
