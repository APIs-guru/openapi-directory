import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
import { ProjectSourceVersion } from "./projectsourceversion";
import { ProjectSource } from "./projectsource";
import { VpcConfig } from "./vpcconfig";



// Build
/** 
 * Information about a build.
**/
export class Build extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=artifacts" })
  artifacts?: BuildArtifacts;

  @SpeakeasyMetadata({ data: "json, name=buildBatchArn" })
  buildBatchArn?: string;

  @SpeakeasyMetadata({ data: "json, name=buildComplete" })
  buildComplete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=buildNumber" })
  buildNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=buildStatus" })
  buildStatus?: StatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=cache" })
  cache?: ProjectCache;

  @SpeakeasyMetadata({ data: "json, name=currentPhase" })
  currentPhase?: string;

  @SpeakeasyMetadata({ data: "json, name=debugSession" })
  debugSession?: DebugSession;

  @SpeakeasyMetadata({ data: "json, name=encryptionKey" })
  encryptionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: ProjectEnvironment;

  @SpeakeasyMetadata({ data: "json, name=exportedEnvironmentVariables", elemType: ExportedEnvironmentVariable })
  exportedEnvironmentVariables?: ExportedEnvironmentVariable[];

  @SpeakeasyMetadata({ data: "json, name=fileSystemLocations", elemType: ProjectFileSystemLocation })
  fileSystemLocations?: ProjectFileSystemLocation[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=initiator" })
  initiator?: string;

  @SpeakeasyMetadata({ data: "json, name=logs" })
  logs?: LogsLocation;

  @SpeakeasyMetadata({ data: "json, name=networkInterface" })
  networkInterface?: NetworkInterface;

  @SpeakeasyMetadata({ data: "json, name=phases", elemType: BuildPhase })
  phases?: BuildPhase[];

  @SpeakeasyMetadata({ data: "json, name=projectName" })
  projectName?: string;

  @SpeakeasyMetadata({ data: "json, name=queuedTimeoutInMinutes" })
  queuedTimeoutInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=reportArns" })
  reportArns?: string[];

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

  @SpeakeasyMetadata({ data: "json, name=timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=vpcConfig" })
  vpcConfig?: VpcConfig;
}
