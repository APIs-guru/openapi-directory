import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildArtifacts } from "./buildartifacts";
import { ProjectBuildBatchConfig } from "./projectbuildbatchconfig";
import { StatusTypeEnum } from "./statustypeenum";
import { BuildGroup } from "./buildgroup";
import { ProjectCache } from "./projectcache";
import { ProjectEnvironment } from "./projectenvironment";
import { ProjectFileSystemLocation } from "./projectfilesystemlocation";
import { LogsConfig } from "./logsconfig";
import { BuildBatchPhase } from "./buildbatchphase";
import { BuildArtifacts } from "./buildartifacts";
import { ProjectSourceVersion } from "./projectsourceversion";
import { ProjectSource } from "./projectsource";
import { ProjectSource } from "./projectsource";
import { VpcConfig } from "./vpcconfig";


// BuildBatch
/** 
 * Contains information about a batch build.
**/
export class BuildBatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=artifacts" })
  artifacts?: BuildArtifacts;

  @Metadata({ data: "json, name=buildBatchConfig" })
  buildBatchConfig?: ProjectBuildBatchConfig;

  @Metadata({ data: "json, name=buildBatchNumber" })
  buildBatchNumber?: number;

  @Metadata({ data: "json, name=buildBatchStatus" })
  buildBatchStatus?: StatusTypeEnum;

  @Metadata({ data: "json, name=buildGroups", elemType: shared.BuildGroup })
  buildGroups?: BuildGroup[];

  @Metadata({ data: "json, name=buildTimeoutInMinutes" })
  buildTimeoutInMinutes?: number;

  @Metadata({ data: "json, name=cache" })
  cache?: ProjectCache;

  @Metadata({ data: "json, name=complete" })
  complete?: boolean;

  @Metadata({ data: "json, name=currentPhase" })
  currentPhase?: string;

  @Metadata({ data: "json, name=debugSessionEnabled" })
  debugSessionEnabled?: boolean;

  @Metadata({ data: "json, name=encryptionKey" })
  encryptionKey?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=environment" })
  environment?: ProjectEnvironment;

  @Metadata({ data: "json, name=fileSystemLocations", elemType: shared.ProjectFileSystemLocation })
  fileSystemLocations?: ProjectFileSystemLocation[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=initiator" })
  initiator?: string;

  @Metadata({ data: "json, name=logConfig" })
  logConfig?: LogsConfig;

  @Metadata({ data: "json, name=phases", elemType: shared.BuildBatchPhase })
  phases?: BuildBatchPhase[];

  @Metadata({ data: "json, name=projectName" })
  projectName?: string;

  @Metadata({ data: "json, name=queuedTimeoutInMinutes" })
  queuedTimeoutInMinutes?: number;

  @Metadata({ data: "json, name=resolvedSourceVersion" })
  resolvedSourceVersion?: string;

  @Metadata({ data: "json, name=secondaryArtifacts", elemType: shared.BuildArtifacts })
  secondaryArtifacts?: BuildArtifacts[];

  @Metadata({ data: "json, name=secondarySourceVersions", elemType: shared.ProjectSourceVersion })
  secondarySourceVersions?: ProjectSourceVersion[];

  @Metadata({ data: "json, name=secondarySources", elemType: shared.ProjectSource })
  secondarySources?: ProjectSource[];

  @Metadata({ data: "json, name=serviceRole" })
  serviceRole?: string;

  @Metadata({ data: "json, name=source" })
  source?: ProjectSource;

  @Metadata({ data: "json, name=sourceVersion" })
  sourceVersion?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=vpcConfig" })
  vpcConfig?: VpcConfig;
}
