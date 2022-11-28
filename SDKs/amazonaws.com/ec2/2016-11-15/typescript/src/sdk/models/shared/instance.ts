import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArchitectureValuesEnum } from "./architecturevaluesenum";
import { InstanceBlockDeviceMapping } from "./instanceblockdevicemapping";
import { BootModeValuesEnum } from "./bootmodevaluesenum";
import { CapacityReservationSpecificationResponse } from "./capacityreservationspecificationresponse";
import { CpuOptions } from "./cpuoptions";
import { ElasticGpuAssociation } from "./elasticgpuassociation";
import { ElasticInferenceAcceleratorAssociation } from "./elasticinferenceacceleratorassociation";
import { EnclaveOptions } from "./enclaveoptions";
import { HibernationOptions } from "./hibernationoptions";
import { HypervisorTypeEnum } from "./hypervisortypeenum";
import { IamInstanceProfile } from "./iaminstanceprofile";
import { InstanceLifecycleTypeEnum } from "./instancelifecycletypeenum";
import { InstanceTypeEnum } from "./instancetypeenum";
import { LicenseConfiguration } from "./licenseconfiguration";
import { InstanceMetadataOptionsResponse } from "./instancemetadataoptionsresponse";
import { Monitoring } from "./monitoring";
import { InstanceNetworkInterface } from "./instancenetworkinterface";
import { Placement } from "./placement";
import { PlatformValuesEnum } from "./platformvaluesenum";
import { ProductCode } from "./productcode";
import { DeviceTypeEnum } from "./devicetypeenum";
import { GroupIdentifier } from "./groupidentifier";
import { InstanceState } from "./instancestate";
import { StateReason } from "./statereason";
import { Tag } from "./tag";
import { VirtualizationTypeEnum } from "./virtualizationtypeenum";



// Instance
/** 
 * Describes an instance.
**/
export class Instance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  amiLaunchIndex?: number;

  @SpeakeasyMetadata()
  architecture?: ArchitectureValuesEnum;

  @SpeakeasyMetadata({ elemType: InstanceBlockDeviceMapping })
  blockDeviceMappings?: InstanceBlockDeviceMapping[];

  @SpeakeasyMetadata()
  bootMode?: BootModeValuesEnum;

  @SpeakeasyMetadata()
  capacityReservationId?: string;

  @SpeakeasyMetadata()
  capacityReservationSpecification?: CapacityReservationSpecificationResponse;

  @SpeakeasyMetadata()
  clientToken?: string;

  @SpeakeasyMetadata()
  cpuOptions?: CpuOptions;

  @SpeakeasyMetadata()
  ebsOptimized?: boolean;

  @SpeakeasyMetadata({ elemType: ElasticGpuAssociation })
  elasticGpuAssociations?: ElasticGpuAssociation[];

  @SpeakeasyMetadata({ elemType: ElasticInferenceAcceleratorAssociation })
  elasticInferenceAcceleratorAssociations?: ElasticInferenceAcceleratorAssociation[];

  @SpeakeasyMetadata()
  enaSupport?: boolean;

  @SpeakeasyMetadata()
  enclaveOptions?: EnclaveOptions;

  @SpeakeasyMetadata()
  hibernationOptions?: HibernationOptions;

  @SpeakeasyMetadata()
  hypervisor?: HypervisorTypeEnum;

  @SpeakeasyMetadata()
  iamInstanceProfile?: IamInstanceProfile;

  @SpeakeasyMetadata()
  imageId?: string;

  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  instanceLifecycle?: InstanceLifecycleTypeEnum;

  @SpeakeasyMetadata()
  instanceType?: InstanceTypeEnum;

  @SpeakeasyMetadata()
  kernelId?: string;

  @SpeakeasyMetadata()
  keyName?: string;

  @SpeakeasyMetadata()
  launchTime?: Date;

  @SpeakeasyMetadata({ elemType: LicenseConfiguration })
  licenses?: LicenseConfiguration[];

  @SpeakeasyMetadata()
  metadataOptions?: InstanceMetadataOptionsResponse;

  @SpeakeasyMetadata()
  monitoring?: Monitoring;

  @SpeakeasyMetadata({ elemType: InstanceNetworkInterface })
  networkInterfaces?: InstanceNetworkInterface[];

  @SpeakeasyMetadata()
  outpostArn?: string;

  @SpeakeasyMetadata()
  placement?: Placement;

  @SpeakeasyMetadata()
  platform?: PlatformValuesEnum;

  @SpeakeasyMetadata()
  privateDnsName?: string;

  @SpeakeasyMetadata()
  privateIpAddress?: string;

  @SpeakeasyMetadata({ elemType: ProductCode })
  productCodes?: ProductCode[];

  @SpeakeasyMetadata()
  publicDnsName?: string;

  @SpeakeasyMetadata()
  publicIpAddress?: string;

  @SpeakeasyMetadata()
  ramdiskId?: string;

  @SpeakeasyMetadata()
  rootDeviceName?: string;

  @SpeakeasyMetadata()
  rootDeviceType?: DeviceTypeEnum;

  @SpeakeasyMetadata({ elemType: GroupIdentifier })
  securityGroups?: GroupIdentifier[];

  @SpeakeasyMetadata()
  sourceDestCheck?: boolean;

  @SpeakeasyMetadata()
  spotInstanceRequestId?: string;

  @SpeakeasyMetadata()
  sriovNetSupport?: string;

  @SpeakeasyMetadata()
  state?: InstanceState;

  @SpeakeasyMetadata()
  stateReason?: StateReason;

  @SpeakeasyMetadata()
  stateTransitionReason?: string;

  @SpeakeasyMetadata()
  subnetId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  virtualizationType?: VirtualizationTypeEnum;

  @SpeakeasyMetadata()
  vpcId?: string;
}
