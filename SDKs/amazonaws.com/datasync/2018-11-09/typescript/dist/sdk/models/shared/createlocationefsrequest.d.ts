import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2Config } from "./ec2config";
import { TagListEntry } from "./taglistentry";
/**
 * CreateLocationEfsRequest
**/
export declare class CreateLocationEfsRequest extends SpeakeasyBase {
    ec2Config: Ec2Config;
    efsFilesystemArn: string;
    subdirectory?: string;
    tags?: TagListEntry[];
}
