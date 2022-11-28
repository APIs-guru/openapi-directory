import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the EC2 instances that are to be sent the command, specified as key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but this key may specify multiple values.
**/
export declare class RunCommandTarget extends SpeakeasyBase {
    key: string;
    values: string[];
}
