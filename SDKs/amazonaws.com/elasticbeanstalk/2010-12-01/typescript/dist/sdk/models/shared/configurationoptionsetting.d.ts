import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A specification identifying an individual configuration option along with its current value. For a list of possible namespaces and option values, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html">Option Values</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
**/
export declare class ConfigurationOptionSetting extends SpeakeasyBase {
    namespace?: string;
    optionName?: string;
    resourceName?: string;
    value?: string;
}
