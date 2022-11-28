import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartJobRunPathParams extends SpeakeasyBase {
    virtualClusterId: string;
}
export declare class StartJobRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * A configuration specification to be used to override existing configurations.
**/
export declare class StartJobRunRequestBodyConfigurationOverrides extends SpeakeasyBase {
    applicationConfiguration?: shared.Configuration[];
    monitoringConfiguration?: shared.MonitoringConfiguration;
}
/**
 * Specify the driver that the job runs on.
**/
export declare class StartJobRunRequestBodyJobDriver extends SpeakeasyBase {
    sparkSubmitJobDriver?: shared.SparkSubmitJobDriver;
}
export declare class StartJobRunRequestBody extends SpeakeasyBase {
    clientToken: string;
    configurationOverrides?: StartJobRunRequestBodyConfigurationOverrides;
    executionRoleArn: string;
    jobDriver: StartJobRunRequestBodyJobDriver;
    name?: string;
    releaseLabel: string;
    tags?: Map<string, string>;
}
export declare class StartJobRunRequest extends SpeakeasyBase {
    pathParams: StartJobRunPathParams;
    headers: StartJobRunHeaders;
    request: StartJobRunRequestBody;
}
export declare class StartJobRunResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    startJobRunResponse?: shared.StartJobRunResponse;
    statusCode: number;
    validationException?: any;
}
