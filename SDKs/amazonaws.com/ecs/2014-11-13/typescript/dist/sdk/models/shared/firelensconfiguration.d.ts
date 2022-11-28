import { SpeakeasyBase } from "../../../internal/utils";
import { FirelensConfigurationTypeEnum } from "./firelensconfigurationtypeenum";
/**
 * The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html">Custom Log Routing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
**/
export declare class FirelensConfiguration extends SpeakeasyBase {
    options?: Map<string, string>;
    type: FirelensConfigurationTypeEnum;
}
