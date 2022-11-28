import { SpeakeasyBase } from "../../../internal/utils";
import { TagListEntry } from "./taglistentry";
export declare class CreateLocationFsxWindowsRequest extends SpeakeasyBase {
    domain?: string;
    fsxFilesystemArn: string;
    password: string;
    securityGroupArns: string[];
    subdirectory?: string;
    tags?: TagListEntry[];
    user: string;
}
