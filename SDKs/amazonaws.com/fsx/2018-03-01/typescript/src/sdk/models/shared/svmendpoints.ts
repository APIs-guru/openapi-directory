import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SvmEndpoint } from "./svmendpoint";



// SvmEndpoints
/** 
 * An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has the following endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager.
**/
export class SvmEndpoints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Iscsi" })
  iscsi?: SvmEndpoint;

  @SpeakeasyMetadata({ data: "json, name=Management" })
  management?: SvmEndpoint;

  @SpeakeasyMetadata({ data: "json, name=Nfs" })
  nfs?: SvmEndpoint;

  @SpeakeasyMetadata({ data: "json, name=Smb" })
  smb?: SvmEndpoint;
}
