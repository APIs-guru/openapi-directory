import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SmbVersionEnum } from "./smbversionenum";



// SmbMountOptions
/** 
 * Represents the mount options that are available for DataSync to access an SMB location.
**/
export class SmbMountOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: SmbVersionEnum;
}
