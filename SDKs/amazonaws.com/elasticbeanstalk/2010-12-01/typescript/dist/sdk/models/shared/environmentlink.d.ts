import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A link to another environment, defined in the environment's manifest. Links provide connection information in system properties that can be used to connect to another environment in the same group. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest (env.yaml)</a> for details.
**/
export declare class EnvironmentLink extends SpeakeasyBase {
    environmentName?: string;
    linkName?: string;
}
