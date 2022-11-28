import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectArtifacts } from "./projectartifacts";
import { ProjectBuildBatchConfig } from "./projectbuildbatchconfig";
import { ProjectCache } from "./projectcache";
import { ComputeTypeEnum } from "./computetypeenum";
import { EnvironmentTypeEnum } from "./environmenttypeenum";
import { EnvironmentVariable } from "./environmentvariable";
import { GitSubmodulesConfig } from "./gitsubmodulesconfig";
import { ImagePullCredentialsTypeEnum } from "./imagepullcredentialstypeenum";
import { LogsConfig } from "./logsconfig";
import { RegistryCredential } from "./registrycredential";
import { ProjectSource } from "./projectsource";
import { ProjectSourceVersion } from "./projectsourceversion";
import { SourceAuth } from "./sourceauth";
import { SourceTypeEnum } from "./sourcetypeenum";



export class StartBuildBatchInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactsOverride" })
  artifactsOverride?: ProjectArtifacts;

  @SpeakeasyMetadata({ data: "json, name=buildBatchConfigOverride" })
  buildBatchConfigOverride?: ProjectBuildBatchConfig;

  @SpeakeasyMetadata({ data: "json, name=buildTimeoutInMinutesOverride" })
  buildTimeoutInMinutesOverride?: number;

  @SpeakeasyMetadata({ data: "json, name=buildspecOverride" })
  buildspecOverride?: string;

  @SpeakeasyMetadata({ data: "json, name=cacheOverride" })
  cacheOverride?: ProjectCache;

  @SpeakeasyMetadata({ data: "json, name=certificateOverride" })
  certificateOverride?: string;

  @SpeakeasyMetadata({ data: "json, name=computeTypeOverride" })
  computeTypeOverride?: ComputeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=debugSessionEnabled" })
  debugSessionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryptionKeyOverride" })
  encryptionKeyOverride?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentTypeOverride" })
  environmentTypeOverride?: EnvironmentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=environmentVariablesOverride", elemType: EnvironmentVariable })
  environmentVariablesOverride?: EnvironmentVariable[];

  @SpeakeasyMetadata({ data: "json, name=gitCloneDepthOverride" })
  gitCloneDepthOverride?: number;

  @SpeakeasyMetadata({ data: "json, name=gitSubmodulesConfigOverride" })
  gitSubmodulesConfigOverride?: GitSubmodulesConfig;

  @SpeakeasyMetadata({ data: "json, name=imageOverride" })
  imageOverride?: string;

  @SpeakeasyMetadata({ data: "json, name=imagePullCredentialsTypeOverride" })
  imagePullCredentialsTypeOverride?: ImagePullCredentialsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=insecureSslOverride" })
  insecureSslOverride?: boolean;

  @SpeakeasyMetadata({ data: "json, name=logsConfigOverride" })
  logsConfigOverride?: LogsConfig;

  @SpeakeasyMetadata({ data: "json, name=privilegedModeOverride" })
  privilegedModeOverride?: boolean;

  @SpeakeasyMetadata({ data: "json, name=projectName" })
  projectName: string;

  @SpeakeasyMetadata({ data: "json, name=queuedTimeoutInMinutesOverride" })
  queuedTimeoutInMinutesOverride?: number;

  @SpeakeasyMetadata({ data: "json, name=registryCredentialOverride" })
  registryCredentialOverride?: RegistryCredential;

  @SpeakeasyMetadata({ data: "json, name=reportBuildBatchStatusOverride" })
  reportBuildBatchStatusOverride?: boolean;

  @SpeakeasyMetadata({ data: "json, name=secondaryArtifactsOverride", elemType: ProjectArtifacts })
  secondaryArtifactsOverride?: ProjectArtifacts[];

  @SpeakeasyMetadata({ data: "json, name=secondarySourcesOverride", elemType: ProjectSource })
  secondarySourcesOverride?: ProjectSource[];

  @SpeakeasyMetadata({ data: "json, name=secondarySourcesVersionOverride", elemType: ProjectSourceVersion })
  secondarySourcesVersionOverride?: ProjectSourceVersion[];

  @SpeakeasyMetadata({ data: "json, name=serviceRoleOverride" })
  serviceRoleOverride?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceAuthOverride" })
  sourceAuthOverride?: SourceAuth;

  @SpeakeasyMetadata({ data: "json, name=sourceLocationOverride" })
  sourceLocationOverride?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceTypeOverride" })
  sourceTypeOverride?: SourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceVersion" })
  sourceVersion?: string;
}
