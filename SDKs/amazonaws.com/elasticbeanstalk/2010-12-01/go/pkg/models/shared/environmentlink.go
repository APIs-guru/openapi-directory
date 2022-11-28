package shared

// EnvironmentLink
// A link to another environment, defined in the environment's manifest. Links provide connection information in system properties that can be used to connect to another environment in the same group. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.
type EnvironmentLink struct {
	EnvironmentName *string
	LinkName        *string
}
