import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BackendEnvironment
/** 
 *  Describes the backend environment for an Amplify app. 
**/
export class BackendEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backendEnvironmentArn" })
  backendEnvironmentArn: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime: Date;

  @SpeakeasyMetadata({ data: "json, name=deploymentArtifacts" })
  deploymentArtifacts?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentName" })
  environmentName: string;

  @SpeakeasyMetadata({ data: "json, name=stackName" })
  stackName?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime: Date;
}
