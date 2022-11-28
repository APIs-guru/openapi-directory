import { SpeakeasyBase } from "../../../internal/utils";
import { LifeCycleStateEnum } from "./lifecyclestateenum";
import { PerformanceModeEnum } from "./performancemodeenum";
import { FileSystemSize } from "./filesystemsize";
import { Tag } from "./tag";
import { ThroughputModeEnum } from "./throughputmodeenum";
/**
 * A description of the file system.
**/
export declare class FileSystemDescription extends SpeakeasyBase {
    availabilityZoneId?: string;
    availabilityZoneName?: string;
    creationTime: Date;
    creationToken: string;
    encrypted?: boolean;
    fileSystemArn?: string;
    fileSystemId: string;
    kmsKeyId?: string;
    lifeCycleState: LifeCycleStateEnum;
    name?: string;
    numberOfMountTargets: number;
    ownerId: string;
    performanceMode: PerformanceModeEnum;
    provisionedThroughputInMibps?: number;
    sizeInBytes: FileSystemSize;
    tags: Tag[];
    throughputMode?: ThroughputModeEnum;
}
