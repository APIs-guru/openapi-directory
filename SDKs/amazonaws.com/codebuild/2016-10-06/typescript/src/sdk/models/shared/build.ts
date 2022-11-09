import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildArtifacts } from "./buildartifacts";
import { StatusTypeEnum } from "./statustypeenum";
import { ProjectCache } from "./projectcache";
import { DebugSession } from "./debugsession";
import { ProjectEnvironment } from "./projectenvironment";
import { ExportedEnvironmentVariable } from "./exportedenvironmentvariable";
import { ProjectFileSystemLocation } from "./projectfilesystemlocation";
import { LogsLocation } from "./logslocation";
import { NetworkInterface } from "./networkinterface";
import { BuildPhase } from "./buildphase";
import { BuildArtifacts } from "./buildartifacts";
import { ProjectSourceVersion } from "./projectsourceversion";
import { ProjectSource } from "./projectsource";
import { ProjectSource } from "./projectsource";
import { VpcConfig } from "./vpcconfig";


// Build
/** 
 * Information about a build.
**/
export class Build extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=artifacts" })
  artifacts?: BuildArtifacts;

  @Metadata({ data: "json, name=buildBatchArn" })
  buildBatchArn?: string;

  @Metadata({ data: "json, name=buildComplete" })
  buildComplete?: boolean;

  @Metadata({ data: "json, name=buildNumber" })
  buildNumber?: number;

  @Metadata({ data: "json, name=buildStatus" })
  buildStatus?: StatusTypeEnum;

  @Metadata({ data: "json, name=cache" })
  cache?: ProjectCache;

  @Metadata({ data: "json, name=currentPhase" })
  currentPhase?: string;

  @Metadata({ data: "json, name=debugSession" })
  debugSession?: DebugSession;

  @Metadata({ data: "json, name=encryptionKey" })
  encryptionKey?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=environment" })
  environment?: ProjectEnvironment;

  @Metadata({ data: "json, name=exportedEnvironmentVariables", elemType: shared.ExportedEnvironmentVariable })
  exportedEnvironmentVariables?: ExportedEnvironmentVariable[];

  @Metadata({ data: "json, name=fileSystemLocations", elemType: shared.ProjectFileSystemLocation })
  fileSystemLocations?: ProjectFileSystemLocation[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=initiator" })
  initiator?: string;

  @Metadata({ data: "json, name=logs" })
  logs?: LogsLocation;

  @Metadata({ data: "json, name=networkInterface" })
  networkInterface?: NetworkInterface;

  @Metadata({ data: "json, name=phases", elemType: shared.BuildPhase })
  phases?: BuildPhase[];

  @Metadata({ data: "json, name=projectName" })
  projectName?: string;

  @Metadata({ data: "json, name=queuedTimeoutInMinutes" })
  queuedTimeoutInMinutes?: number;

  @Metadata({ data: "json, name=reportArns" })
  reportArns?: string[];

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

  @Metadata({ data: "json, name=timeoutInMinutes" })
  timeoutInMinutes?: number;

  @Metadata({ data: "json, name=vpcConfig" })
  vpcConfig?: VpcConfig;
}
