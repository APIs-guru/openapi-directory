import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateInstanceMetadataEndpointStateEnum } from "./launchtemplateinstancemetadataendpointstateenum";
import { LaunchTemplateInstanceMetadataProtocolIpv6Enum } from "./launchtemplateinstancemetadataprotocolipv6enum";
import { LaunchTemplateHttpTokensStateEnum } from "./launchtemplatehttptokensstateenum";
import { LaunchTemplateInstanceMetadataOptionsStateEnum } from "./launchtemplateinstancemetadataoptionsstateenum";
/**
 * The metadata options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance Metadata and User Data</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
export declare class LaunchTemplateInstanceMetadataOptions extends SpeakeasyBase {
    httpEndpoint?: LaunchTemplateInstanceMetadataEndpointStateEnum;
    httpProtocolIpv6?: LaunchTemplateInstanceMetadataProtocolIpv6Enum;
    httpPutResponseHopLimit?: number;
    httpTokens?: LaunchTemplateHttpTokensStateEnum;
    state?: LaunchTemplateInstanceMetadataOptionsStateEnum;
}
