import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=ActiveDirectoryConfiguration" })
  activeDirectoryConfiguration?: SvmActiveDirectoryConfiguration;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Endpoints" })
  endpoints?: SvmEndpoints;

  @SpeakeasyMetadata({ data: "json, name=FileSystemId" })
  fileSystemId?: string;

  @SpeakeasyMetadata({ data: "json, name=Lifecycle" })
  lifecycle?: StorageVirtualMachineLifecycleEnum;

  @SpeakeasyMetadata({ data: "json, name=LifecycleTransitionReason" })
  lifecycleTransitionReason?: LifecycleTransitionReason;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RootVolumeSecurityStyle" })
  rootVolumeSecurityStyle?: StorageVirtualMachineRootVolumeSecurityStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=StorageVirtualMachineId" })
  storageVirtualMachineId?: string;

  @SpeakeasyMetadata({ data: "json, name=Subtype" })
  subtype?: StorageVirtualMachineSubtypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=UUID" })
  uuid?: string;
}
