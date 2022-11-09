import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProjectArtifacts } from "./projectartifacts";
import { ProjectBadge } from "./projectbadge";
import { ProjectBuildBatchConfig } from "./projectbuildbatchconfig";
import { ProjectCache } from "./projectcache";
import { ProjectEnvironment } from "./projectenvironment";
import { ProjectFileSystemLocation } from "./projectfilesystemlocation";
import { LogsConfig } from "./logsconfig";
import { ProjectVisibilityTypeEnum } from "./projectvisibilitytypeenum";
import { ProjectArtifacts } from "./projectartifacts";
import { ProjectSourceVersion } from "./projectsourceversion";
import { ProjectSource } from "./projectsource";
import { ProjectSource } from "./projectsource";
import { Tag } from "./tag";
import { VpcConfig } from "./vpcconfig";
import { Webhook } from "./webhook";


// Project
/** 
 * Information about a build project.
**/
export class Project extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=artifacts" })
  artifacts?: ProjectArtifacts;

  @Metadata({ data: "json, name=badge" })
  badge?: ProjectBadge;

  @Metadata({ data: "json, name=buildBatchConfig" })
  buildBatchConfig?: ProjectBuildBatchConfig;

  @Metadata({ data: "json, name=cache" })
  cache?: ProjectCache;

  @Metadata({ data: "json, name=concurrentBuildLimit" })
  concurrentBuildLimit?: number;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=encryptionKey" })
  encryptionKey?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: ProjectEnvironment;

  @Metadata({ data: "json, name=fileSystemLocations", elemType: shared.ProjectFileSystemLocation })
  fileSystemLocations?: ProjectFileSystemLocation[];

  @Metadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=logsConfig" })
  logsConfig?: LogsConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectVisibility" })
  projectVisibility?: ProjectVisibilityTypeEnum;

  @Metadata({ data: "json, name=publicProjectAlias" })
  publicProjectAlias?: string;

  @Metadata({ data: "json, name=queuedTimeoutInMinutes" })
  queuedTimeoutInMinutes?: number;

  @Metadata({ data: "json, name=resourceAccessRole" })
  resourceAccessRole?: string;

  @Metadata({ data: "json, name=secondaryArtifacts", elemType: shared.ProjectArtifacts })
  secondaryArtifacts?: ProjectArtifacts[];

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

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=timeoutInMinutes" })
  timeoutInMinutes?: number;

  @Metadata({ data: "json, name=vpcConfig" })
  vpcConfig?: VpcConfig;

  @Metadata({ data: "json, name=webhook" })
  webhook?: Webhook;
}
