import { SpeakeasyBase } from "../../../internal/utils";
import { VersionInformation } from "./versioninformation";
export declare class ListLoggerDefinitionVersionsResponse extends SpeakeasyBase {
    nextToken?: string;
    versions?: VersionInformation[];
}
