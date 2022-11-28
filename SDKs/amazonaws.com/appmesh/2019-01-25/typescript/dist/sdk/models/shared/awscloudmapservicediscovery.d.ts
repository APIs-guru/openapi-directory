import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCloudMapInstanceAttribute } from "./awscloudmapinstanceattribute";
/**
 * <p>An object that represents the Cloud Map service discovery information for your virtual node.</p> <note> <p>Cloud Map is not available in the eu-south-1 Region.</p> </note>
**/
export declare class AwsCloudMapServiceDiscovery extends SpeakeasyBase {
    attributes?: AwsCloudMapInstanceAttribute[];
    namespaceName: string;
    serviceName: string;
}
