import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PosixUser
/** 
 * The full POSIX identity, including the user ID, group ID, and any secondary group IDs, on the access point that is used for all file system operations performed by NFS clients using the access point.
**/
export class PosixUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Gid" })
  gid: number;

  @SpeakeasyMetadata({ data: "json, name=SecondaryGids" })
  secondaryGids?: number[];

  @SpeakeasyMetadata({ data: "json, name=Uid" })
  uid: number;
}
