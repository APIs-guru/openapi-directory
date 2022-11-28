import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
**/
export declare class PosixUser extends SpeakeasyBase {
    gid: number;
    secondaryGids?: number[];
    uid: number;
}
