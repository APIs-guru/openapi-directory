import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationOverrides } from "./configurationoverrides";
import { FailureReasonEnum } from "./failurereasonenum";
import { EndpointStateEnum } from "./endpointstateenum";
/**
 * This entity represents the endpoint that is managed by Amazon EMR on EKS.
**/
export declare class Endpoint extends SpeakeasyBase {
    arn?: string;
    certificateArn?: string;
    configurationOverrides?: ConfigurationOverrides;
    createdAt?: Date;
    executionRoleArn?: string;
    failureReason?: FailureReasonEnum;
    id?: string;
    name?: string;
    releaseLabel?: string;
    securityGroup?: string;
    serverUrl?: string;
    state?: EndpointStateEnum;
    stateDetails?: string;
    subnetIds?: string[];
    tags?: Map<string, string>;
    type?: string;
    virtualClusterId?: string;
}
