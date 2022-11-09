import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ToolchainSource } from "./toolchainsource";
/**
 * The toolchain template file provided with the project request. AWS CodeStar uses the template to provision the toolchain stack in AWS CloudFormation.
**/
export declare class Toolchain extends SpeakeasyBase {
    roleArn?: string;
    source: ToolchainSource;
    stackParameters?: Map<string, string>;
}
