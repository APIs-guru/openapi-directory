import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LifeCycleStateEnum } from "./lifecyclestateenum";
import { PerformanceModeEnum } from "./performancemodeenum";
import { FileSystemSize } from "./filesystemsize";
import { Tag } from "./tag";
import { ThroughputModeEnum } from "./throughputmodeenum";



// FileSystemDescription
/** 
 * A description of the file system.
**/
export class FileSystemDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZoneId" })
  availabilityZoneId?: string;

  @SpeakeasyMetadata({ data: "json, name=AvailabilityZoneName" })
  availabilityZoneName?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=CreationToken" })
  creationToken: string;

  @SpeakeasyMetadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=FileSystemArn" })
  fileSystemArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=LifeCycleState" })
  lifeCycleState: LifeCycleStateEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfMountTargets" })
  numberOfMountTargets: number;

  @SpeakeasyMetadata({ data: "json, name=OwnerId" })
  ownerId: string;

  @SpeakeasyMetadata({ data: "json, name=PerformanceMode" })
  performanceMode: PerformanceModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedThroughputInMibps" })
  provisionedThroughputInMibps?: number;

  @SpeakeasyMetadata({ data: "json, name=SizeInBytes" })
  sizeInBytes: FileSystemSize;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags: Tag[];

  @SpeakeasyMetadata({ data: "json, name=ThroughputMode" })
  throughputMode?: ThroughputModeEnum;
}
