import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectArtifacts } from "./projectartifacts";
import { ProjectBuildBatchConfig } from "./projectbuildbatchconfig";
import { ProjectCache } from "./projectcache";
import { ProjectEnvironment } from "./projectenvironment";
import { ProjectFileSystemLocation } from "./projectfilesystemlocation";
import { LogsConfig } from "./logsconfig";
import { ProjectSourceVersion } from "./projectsourceversion";
import { ProjectSource } from "./projectsource";
import { Tag } from "./tag";
import { VpcConfig } from "./vpcconfig";



export class UpdateProjectInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifacts" })
  artifacts?: ProjectArtifacts;

  @SpeakeasyMetadata({ data: "json, name=badgeEnabled" })
  badgeEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=buildBatchConfig" })
  buildBatchConfig?: ProjectBuildBatchConfig;

  @SpeakeasyMetadata({ data: "json, name=cache" })
  cache?: ProjectCache;

  @SpeakeasyMetadata({ data: "json, name=concurrentBuildLimit" })
  concurrentBuildLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptionKey" })
  encryptionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: ProjectEnvironment;

  @SpeakeasyMetadata({ data: "json, name=fileSystemLocations", elemType: ProjectFileSystemLocation })
  fileSystemLocations?: ProjectFileSystemLocation[];

  @SpeakeasyMetadata({ data: "json, name=logsConfig" })
  logsConfig?: LogsConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=queuedTimeoutInMinutes" })
  queuedTimeoutInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=secondaryArtifacts", elemType: ProjectArtifacts })
  secondaryArtifacts?: ProjectArtifacts[];

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

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=vpcConfig" })
  vpcConfig?: VpcConfig;
}
