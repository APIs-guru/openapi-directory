package shared

// ConfigurationOptionSetting
// A specification identifying an individual configuration option along with its current value. For a list of possible namespaces and option values, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html">Option Values</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.
type ConfigurationOptionSetting struct {
	Namespace    *string
	OptionName   *string
	ResourceName *string
	Value        *string
}
