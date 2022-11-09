import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Information about a definition.
**/
export declare class DefinitionInformation extends SpeakeasyBase {
    arn?: string;
    creationTimestamp?: string;
    id?: string;
    lastUpdatedTimestamp?: string;
    latestVersion?: string;
    latestVersionArn?: string;
    name?: string;
    tags?: Map<string, string>;
}
