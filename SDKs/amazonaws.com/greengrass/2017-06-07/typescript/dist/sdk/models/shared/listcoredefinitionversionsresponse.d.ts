import { SpeakeasyBase } from "../../../internal/utils/utils";
import { VersionInformation } from "./versioninformation";
export declare class ListCoreDefinitionVersionsResponse extends SpeakeasyBase {
    nextToken?: string;
    versions?: VersionInformation[];
}
