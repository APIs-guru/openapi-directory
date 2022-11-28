import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an application in the application catalog.
**/
export declare class Application extends SpeakeasyBase {
    displayName?: string;
    enabled?: boolean;
    iconUrl?: string;
    launchParameters?: string;
    launchPath?: string;
    metadata?: Map<string, string>;
    name?: string;
}
