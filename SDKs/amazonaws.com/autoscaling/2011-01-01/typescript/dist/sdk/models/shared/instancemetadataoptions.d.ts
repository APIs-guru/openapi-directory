import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceMetadataEndpointStateEnum } from "./instancemetadataendpointstateenum";
import { InstanceMetadataHttpTokensStateEnum } from "./instancemetadatahttptokensstateenum";
/**
 * The metadata options for the instances. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html#launch-configurations-imds">Configuring the Instance Metadata Options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
**/
export declare class InstanceMetadataOptions extends SpeakeasyBase {
    httpEndpoint?: InstanceMetadataEndpointStateEnum;
    httpPutResponseHopLimit?: number;
    httpTokens?: InstanceMetadataHttpTokensStateEnum;
}
