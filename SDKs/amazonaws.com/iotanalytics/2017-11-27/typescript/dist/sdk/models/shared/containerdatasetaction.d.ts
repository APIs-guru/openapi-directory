import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceConfiguration } from "./resourceconfiguration";
import { Variable } from "./variable";
/**
 * Information required to run the <code>containerAction</code> to produce dataset contents.
**/
export declare class ContainerDatasetAction extends SpeakeasyBase {
    executionRoleArn: string;
    image: string;
    resourceConfiguration: ResourceConfiguration;
    variables?: Variable[];
}
