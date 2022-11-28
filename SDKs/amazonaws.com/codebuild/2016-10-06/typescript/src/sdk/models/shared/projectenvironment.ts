import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate?: string;

  @SpeakeasyMetadata({ data: "json, name=computeType" })
  computeType: ComputeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=environmentVariables", elemType: EnvironmentVariable })
  environmentVariables?: EnvironmentVariable[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image: string;

  @SpeakeasyMetadata({ data: "json, name=imagePullCredentialsType" })
  imagePullCredentialsType?: ImagePullCredentialsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=privilegedMode" })
  privilegedMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=registryCredential" })
  registryCredential?: RegistryCredential;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: EnvironmentTypeEnum;
}
