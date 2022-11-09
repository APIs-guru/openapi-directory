import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SvmEndpoint } from "./svmendpoint";
import { SvmEndpoint } from "./svmendpoint";
import { SvmEndpoint } from "./svmendpoint";
import { SvmEndpoint } from "./svmendpoint";


// SvmEndpoints
/** 
 * An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has the following endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager.
**/
export class SvmEndpoints extends SpeakeasyBase {
  @Metadata({ data: "json, name=Iscsi" })
  iscsi?: SvmEndpoint;

  @Metadata({ data: "json, name=Management" })
  management?: SvmEndpoint;

  @Metadata({ data: "json, name=Nfs" })
  nfs?: SvmEndpoint;

  @Metadata({ data: "json, name=Smb" })
  smb?: SvmEndpoint;
}
