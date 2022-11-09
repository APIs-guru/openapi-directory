import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NfsVersionEnum } from "./nfsversionenum";


// NfsMountOptions
/** 
 * Represents the mount options that are available for DataSync to access an NFS location.
**/
export class NfsMountOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=Version" })
  version?: NfsVersionEnum;
}
