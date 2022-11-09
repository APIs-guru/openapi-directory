import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=AvailabilityZoneId" })
  availabilityZoneId?: string;

  @Metadata({ data: "json, name=AvailabilityZoneName" })
  availabilityZoneName?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=CreationToken" })
  creationToken: string;

  @Metadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @Metadata({ data: "json, name=FileSystemArn" })
  fileSystemArn?: string;

  @Metadata({ data: "json, name=FileSystemId" })
  fileSystemId: string;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=LifeCycleState" })
  lifeCycleState: LifeCycleStateEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NumberOfMountTargets" })
  numberOfMountTargets: number;

  @Metadata({ data: "json, name=OwnerId" })
  ownerId: string;

  @Metadata({ data: "json, name=PerformanceMode" })
  performanceMode: PerformanceModeEnum;

  @Metadata({ data: "json, name=ProvisionedThroughputInMibps" })
  provisionedThroughputInMibps?: number;

  @Metadata({ data: "json, name=SizeInBytes" })
  sizeInBytes: FileSystemSize;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags: Tag[];

  @Metadata({ data: "json, name=ThroughputMode" })
  throughputMode?: ThroughputModeEnum;
}
