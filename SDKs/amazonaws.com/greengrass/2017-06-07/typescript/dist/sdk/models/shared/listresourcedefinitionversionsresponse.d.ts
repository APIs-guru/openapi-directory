import { SpeakeasyBase } from "../../../internal/utils/utils";
import { VersionInformation } from "./versioninformation";
export declare class ListResourceDefinitionVersionsResponse extends SpeakeasyBase {
    nextToken?: string;
    versions?: VersionInformation[];
}
