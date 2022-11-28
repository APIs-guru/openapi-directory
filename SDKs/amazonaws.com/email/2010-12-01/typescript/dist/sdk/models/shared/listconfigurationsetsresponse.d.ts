import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationSet } from "./configurationset";
/**
 * A list of configuration sets associated with your AWS account. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
**/
export declare class ListConfigurationSetsResponse extends SpeakeasyBase {
    configurationSets?: ConfigurationSet[];
    nextToken?: string;
}
