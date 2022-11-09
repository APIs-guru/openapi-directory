import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=FileSystemId" })
  fileSystemId?: string;

  @Metadata({ data: "json, name=Lifecycle" })
  lifecycle?: VolumeLifecycleEnum;

  @Metadata({ data: "json, name=LifecycleTransitionReason" })
  lifecycleTransitionReason?: LifecycleTransitionReason;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OntapConfiguration" })
  ontapConfiguration?: OntapVolumeConfiguration;

  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VolumeId" })
  volumeId?: string;

  @Metadata({ data: "json, name=VolumeType" })
  volumeType?: VolumeTypeEnum;
}
