import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BackendEnvironment
/** 
 *  Describes the backend environment for an Amplify app. 
**/
export class BackendEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=backendEnvironmentArn" })
  backendEnvironmentArn: string;

  @Metadata({ data: "json, name=createTime" })
  createTime: Date;

  @Metadata({ data: "json, name=deploymentArtifacts" })
  deploymentArtifacts?: string;

  @Metadata({ data: "json, name=environmentName" })
  environmentName: string;

  @Metadata({ data: "json, name=stackName" })
  stackName?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime: Date;
}
