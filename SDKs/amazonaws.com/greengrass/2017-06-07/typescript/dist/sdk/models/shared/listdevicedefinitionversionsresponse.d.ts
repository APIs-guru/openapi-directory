import { SpeakeasyBase } from "../../../internal/utils/utils";
import { VersionInformation } from "./versioninformation";
export declare class ListDeviceDefinitionVersionsResponse extends SpeakeasyBase {
    nextToken?: string;
    versions?: VersionInformation[];
}
