import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProjectArtifacts } from "./projectartifacts";
import { BuildStatusConfig } from "./buildstatusconfig";
import { ProjectCache } from "./projectcache";
import { ComputeTypeEnum } from "./computetypeenum";
import { EnvironmentTypeEnum } from "./environmenttypeenum";
import { EnvironmentVariable } from "./environmentvariable";
import { GitSubmodulesConfig } from "./gitsubmodulesconfig";
import { ImagePullCredentialsTypeEnum } from "./imagepullcredentialstypeenum";
import { LogsConfig } from "./logsconfig";
import { RegistryCredential } from "./registrycredential";
import { ProjectArtifacts } from "./projectartifacts";
import { ProjectSource } from "./projectsource";
import { ProjectSourceVersion } from "./projectsourceversion";
import { SourceAuth } from "./sourceauth";
import { SourceTypeEnum } from "./sourcetypeenum";


export class StartBuildInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactsOverride" })
  artifactsOverride?: ProjectArtifacts;

  @Metadata({ data: "json, name=buildStatusConfigOverride" })
  buildStatusConfigOverride?: BuildStatusConfig;

  @Metadata({ data: "json, name=buildspecOverride" })
  buildspecOverride?: string;

  @Metadata({ data: "json, name=cacheOverride" })
  cacheOverride?: ProjectCache;

  @Metadata({ data: "json, name=certificateOverride" })
  certificateOverride?: string;

  @Metadata({ data: "json, name=computeTypeOverride" })
  computeTypeOverride?: ComputeTypeEnum;

  @Metadata({ data: "json, name=debugSessionEnabled" })
  debugSessionEnabled?: boolean;

  @Metadata({ data: "json, name=encryptionKeyOverride" })
  encryptionKeyOverride?: string;

  @Metadata({ data: "json, name=environmentTypeOverride" })
  environmentTypeOverride?: EnvironmentTypeEnum;

  @Metadata({ data: "json, name=environmentVariablesOverride", elemType: shared.EnvironmentVariable })
  environmentVariablesOverride?: EnvironmentVariable[];

  @Metadata({ data: "json, name=gitCloneDepthOverride" })
  gitCloneDepthOverride?: number;

  @Metadata({ data: "json, name=gitSubmodulesConfigOverride" })
  gitSubmodulesConfigOverride?: GitSubmodulesConfig;

  @Metadata({ data: "json, name=imageOverride" })
  imageOverride?: string;

  @Metadata({ data: "json, name=imagePullCredentialsTypeOverride" })
  imagePullCredentialsTypeOverride?: ImagePullCredentialsTypeEnum;

  @Metadata({ data: "json, name=insecureSslOverride" })
  insecureSslOverride?: boolean;

  @Metadata({ data: "json, name=logsConfigOverride" })
  logsConfigOverride?: LogsConfig;

  @Metadata({ data: "json, name=privilegedModeOverride" })
  privilegedModeOverride?: boolean;

  @Metadata({ data: "json, name=projectName" })
  projectName: string;

  @Metadata({ data: "json, name=queuedTimeoutInMinutesOverride" })
  queuedTimeoutInMinutesOverride?: number;

  @Metadata({ data: "json, name=registryCredentialOverride" })
  registryCredentialOverride?: RegistryCredential;

  @Metadata({ data: "json, name=reportBuildStatusOverride" })
  reportBuildStatusOverride?: boolean;

  @Metadata({ data: "json, name=secondaryArtifactsOverride", elemType: shared.ProjectArtifacts })
  secondaryArtifactsOverride?: ProjectArtifacts[];

  @Metadata({ data: "json, name=secondarySourcesOverride", elemType: shared.ProjectSource })
  secondarySourcesOverride?: ProjectSource[];

  @Metadata({ data: "json, name=secondarySourcesVersionOverride", elemType: shared.ProjectSourceVersion })
  secondarySourcesVersionOverride?: ProjectSourceVersion[];

  @Metadata({ data: "json, name=serviceRoleOverride" })
  serviceRoleOverride?: string;

  @Metadata({ data: "json, name=sourceAuthOverride" })
  sourceAuthOverride?: SourceAuth;

  @Metadata({ data: "json, name=sourceLocationOverride" })
  sourceLocationOverride?: string;

  @Metadata({ data: "json, name=sourceTypeOverride" })
  sourceTypeOverride?: SourceTypeEnum;

  @Metadata({ data: "json, name=sourceVersion" })
  sourceVersion?: string;

  @Metadata({ data: "json, name=timeoutInMinutesOverride" })
  timeoutInMinutesOverride?: number;
}
