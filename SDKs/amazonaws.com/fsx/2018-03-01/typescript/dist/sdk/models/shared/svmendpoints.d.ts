import { SpeakeasyBase } from "../../../internal/utils";
import { SvmEndpoint } from "./svmendpoint";
/**
 * An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has the following endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager.
**/
export declare class SvmEndpoints extends SpeakeasyBase {
    iscsi?: SvmEndpoint;
    management?: SvmEndpoint;
    nfs?: SvmEndpoint;
    smb?: SvmEndpoint;
}
