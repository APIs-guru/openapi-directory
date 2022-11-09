import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SvmActiveDirectoryConfiguration } from "./svmactivedirectoryconfiguration";
import { SvmEndpoints } from "./svmendpoints";
import { StorageVirtualMachineLifecycleEnum } from "./storagevirtualmachinelifecycleenum";
import { LifecycleTransitionReason } from "./lifecycletransitionreason";
import { StorageVirtualMachineRootVolumeSecurityStyleEnum } from "./storagevirtualmachinerootvolumesecuritystyleenum";
import { StorageVirtualMachineSubtypeEnum } from "./storagevirtualmachinesubtypeenum";
import { Tag } from "./tag";


// StorageVirtualMachine
/** 
 * Describes the Amazon FSx for NetApp ONTAP storage virtual machine (SVM) configuraton.
**/
export class StorageVirtualMachine extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActiveDirectoryConfiguration" })
  activeDirectoryConfiguration?: SvmActiveDirectoryConfiguration;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Endpoints" })
  endpoints?: SvmEndpoints;

  @Metadata({ data: "json, name=FileSystemId" })
  fileSystemId?: string;

  @Metadata({ data: "json, name=Lifecycle" })
  lifecycle?: StorageVirtualMachineLifecycleEnum;

  @Metadata({ data: "json, name=LifecycleTransitionReason" })
  lifecycleTransitionReason?: LifecycleTransitionReason;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @Metadata({ data: "json, name=RootVolumeSecurityStyle" })
  rootVolumeSecurityStyle?: StorageVirtualMachineRootVolumeSecurityStyleEnum;

  @Metadata({ data: "json, name=StorageVirtualMachineId" })
  storageVirtualMachineId?: string;

  @Metadata({ data: "json, name=Subtype" })
  subtype?: StorageVirtualMachineSubtypeEnum;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=UUID" })
  uuid?: string;
}
