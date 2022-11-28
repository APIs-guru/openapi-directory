import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// BuildBatch
/** 
 * Contains information about a batch build.
**/
export class BuildBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=artifacts" })
  artifacts?: BuildArtifacts;

  @SpeakeasyMetadata({ data: "json, name=buildBatchConfig" })
  buildBatchConfig?: ProjectBuildBatchConfig;

  @SpeakeasyMetadata({ data: "json, name=buildBatchNumber" })
  buildBatchNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=buildBatchStatus" })
  buildBatchStatus?: StatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=buildGroups", elemType: BuildGroup })
  buildGroups?: BuildGroup[];

  @SpeakeasyMetadata({ data: "json, name=buildTimeoutInMinutes" })
  buildTimeoutInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=cache" })
  cache?: ProjectCache;

  @SpeakeasyMetadata({ data: "json, name=complete" })
  complete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=currentPhase" })
  currentPhase?: string;

  @SpeakeasyMetadata({ data: "json, name=debugSessionEnabled" })
  debugSessionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryptionKey" })
  encryptionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: ProjectEnvironment;

  @SpeakeasyMetadata({ data: "json, name=fileSystemLocations", elemType: ProjectFileSystemLocation })
  fileSystemLocations?: ProjectFileSystemLocation[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=initiator" })
  initiator?: string;

  @SpeakeasyMetadata({ data: "json, name=logConfig" })
  logConfig?: LogsConfig;

  @SpeakeasyMetadata({ data: "json, name=phases", elemType: BuildBatchPhase })
  phases?: BuildBatchPhase[];

  @SpeakeasyMetadata({ data: "json, name=projectName" })
  projectName?: string;

  @SpeakeasyMetadata({ data: "json, name=queuedTimeoutInMinutes" })
  queuedTimeoutInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=resolvedSourceVersion" })
  resolvedSourceVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=secondaryArtifacts", elemType: BuildArtifacts })
  secondaryArtifacts?: BuildArtifacts[];

  @SpeakeasyMetadata({ data: "json, name=secondarySourceVersions", elemType: ProjectSourceVersion })
  secondarySourceVersions?: ProjectSourceVersion[];

  @SpeakeasyMetadata({ data: "json, name=secondarySources", elemType: ProjectSource })
  secondarySources?: ProjectSource[];

  @SpeakeasyMetadata({ data: "json, name=serviceRole" })
  serviceRole?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: ProjectSource;

  @SpeakeasyMetadata({ data: "json, name=sourceVersion" })
  sourceVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=vpcConfig" })
  vpcConfig?: VpcConfig;
}
