import { SpeakeasyBase } from "../../../internal/utils";
import { FileSystemDescription } from "./filesystemdescription";
export declare class DescribeFileSystemsResponse extends SpeakeasyBase {
    fileSystems?: FileSystemDescription[];
    marker?: string;
    nextMarker?: string;
}
