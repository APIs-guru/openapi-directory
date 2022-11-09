import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 *  Describes the backend environment for an Amplify app.
**/
export declare class BackendEnvironment extends SpeakeasyBase {
    backendEnvironmentArn: string;
    createTime: Date;
    deploymentArtifacts?: string;
    environmentName: string;
    stackName?: string;
    updateTime: Date;
}
