import { SpeakeasyBase } from "../../../internal/utils";
import { VersionInformation } from "./versioninformation";
export declare class ListGroupVersionsResponse extends SpeakeasyBase {
    nextToken?: string;
    versions?: VersionInformation[];
}
