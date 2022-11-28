import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfigurationOptionSetting
/** 
 * A specification identifying an individual configuration option along with its current value. For a list of possible namespaces and option values, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html">Option Values</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>. 
**/
export class ConfigurationOptionSetting extends SpeakeasyBase {
  @SpeakeasyMetadata()
  namespace?: string;

  @SpeakeasyMetadata()
  optionName?: string;

  @SpeakeasyMetadata()
  resourceName?: string;

  @SpeakeasyMetadata()
  value?: string;
}
