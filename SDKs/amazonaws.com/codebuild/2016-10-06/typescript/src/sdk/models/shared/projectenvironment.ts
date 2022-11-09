import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComputeTypeEnum } from "./computetypeenum";
import { EnvironmentVariable } from "./environmentvariable";
import { ImagePullCredentialsTypeEnum } from "./imagepullcredentialstypeenum";
import { RegistryCredential } from "./registrycredential";
import { EnvironmentTypeEnum } from "./environmenttypeenum";


// ProjectEnvironment
/** 
 * Information about the build environment of the build project.
**/
export class ProjectEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate" })
  certificate?: string;

  @Metadata({ data: "json, name=computeType" })
  computeType: ComputeTypeEnum;

  @Metadata({ data: "json, name=environmentVariables", elemType: shared.EnvironmentVariable })
  environmentVariables?: EnvironmentVariable[];

  @Metadata({ data: "json, name=image" })
  image: string;

  @Metadata({ data: "json, name=imagePullCredentialsType" })
  imagePullCredentialsType?: ImagePullCredentialsTypeEnum;

  @Metadata({ data: "json, name=privilegedMode" })
  privilegedMode?: boolean;

  @Metadata({ data: "json, name=registryCredential" })
  registryCredential?: RegistryCredential;

  @Metadata({ data: "json, name=type" })
  type: EnvironmentTypeEnum;
}
