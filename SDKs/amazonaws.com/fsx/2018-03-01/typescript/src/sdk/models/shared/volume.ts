import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeLifecycleEnum } from "./volumelifecycleenum";
import { LifecycleTransitionReason } from "./lifecycletransitionreason";
import { OntapVolumeConfiguration } from "./ontapvolumeconfiguration";
import { Tag } from "./tag";
import { VolumeTypeEnum } from "./volumetypeenum";



// Volume
/** 
 * Describes an Amazon FSx for NetApp ONTAP volume.
**/
export class Volume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FileSystemId" })
  fileSystemId?: string;

  @SpeakeasyMetadata({ data: "json, name=Lifecycle" })
  lifecycle?: VolumeLifecycleEnum;

  @SpeakeasyMetadata({ data: "json, name=LifecycleTransitionReason" })
  lifecycleTransitionReason?: LifecycleTransitionReason;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OntapConfiguration" })
  ontapConfiguration?: OntapVolumeConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VolumeId" })
  volumeId?: string;

  @SpeakeasyMetadata({ data: "json, name=VolumeType" })
  volumeType?: VolumeTypeEnum;
}
