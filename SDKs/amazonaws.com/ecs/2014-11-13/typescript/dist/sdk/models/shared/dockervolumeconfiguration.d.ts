import { SpeakeasyBase } from "../../../internal/utils";
import { ScopeEnum } from "./scopeenum";
/**
 * This parameter is specified when you are using Docker volumes. Docker volumes are only supported when you are using the EC2 launch type. Windows containers only support the use of the <code>local</code> driver. To use bind mounts, specify a <code>host</code> instead.
**/
export declare class DockerVolumeConfiguration extends SpeakeasyBase {
    autoprovision?: boolean;
    driver?: string;
    driverOpts?: Map<string, string>;
    labels?: Map<string, string>;
    scope?: ScopeEnum;
}
