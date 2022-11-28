import { SpeakeasyBase } from "../../../internal/utils";
import { BuildArtifacts } from "./buildartifacts";
import { ProjectBuildBatchConfig } from "./projectbuildbatchconfig";
import { StatusTypeEnum } from "./statustypeenum";
import { BuildGroup } from "./buildgroup";
import { ProjectCache } from "./projectcache";
import { ProjectEnvironment } from "./projectenvironment";
import { ProjectFileSystemLocation } from "./projectfilesystemlocation";
import { LogsConfig } from "./logsconfig";
import { BuildBatchPhase } from "./buildbatchphase";
import { ProjectSourceVersion } from "./projectsourceversion";
import { ProjectSource } from "./projectsource";
import { VpcConfig } from "./vpcconfig";
/**
 * Contains information about a batch build.
**/
export declare class BuildBatch extends SpeakeasyBase {
    arn?: string;
    artifacts?: BuildArtifacts;
    buildBatchConfig?: ProjectBuildBatchConfig;
    buildBatchNumber?: number;
    buildBatchStatus?: StatusTypeEnum;
    buildGroups?: BuildGroup[];
    buildTimeoutInMinutes?: number;
    cache?: ProjectCache;
    complete?: boolean;
    currentPhase?: string;
    debugSessionEnabled?: boolean;
    encryptionKey?: string;
    endTime?: Date;
    environment?: ProjectEnvironment;
    fileSystemLocations?: ProjectFileSystemLocation[];
    id?: string;
    initiator?: string;
    logConfig?: LogsConfig;
    phases?: BuildBatchPhase[];
    projectName?: string;
    queuedTimeoutInMinutes?: number;
    resolvedSourceVersion?: string;
    secondaryArtifacts?: BuildArtifacts[];
    secondarySourceVersions?: ProjectSourceVersion[];
    secondarySources?: ProjectSource[];
    serviceRole?: string;
    source?: ProjectSource;
    sourceVersion?: string;
    startTime?: Date;
    vpcConfig?: VpcConfig;
}
