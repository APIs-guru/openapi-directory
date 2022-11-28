import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationVersionDescription } from "./applicationversiondescription";
/**
 * Result message wrapping a list of application version descriptions.
**/
export declare class ApplicationVersionDescriptionsMessage extends SpeakeasyBase {
    applicationVersions?: ApplicationVersionDescription[];
    nextToken?: string;
}
