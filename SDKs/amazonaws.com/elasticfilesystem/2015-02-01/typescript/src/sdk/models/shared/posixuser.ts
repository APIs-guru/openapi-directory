import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PosixUser
/** 
 * The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
**/
export class PosixUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=Gid" })
  gid: number;

  @Metadata({ data: "json, name=SecondaryGids" })
  secondaryGids?: number[];

  @Metadata({ data: "json, name=Uid" })
  uid: number;
}
