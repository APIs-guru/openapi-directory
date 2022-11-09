import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ToolchainSource } from "./toolchainsource";


// Toolchain
/** 
 * The toolchain template file provided with the project request. AWS CodeStar uses the template to provision the toolchain stack in AWS CloudFormation.
**/
export class Toolchain extends SpeakeasyBase {
  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=source" })
  source: ToolchainSource;

  @Metadata({ data: "json, name=stackParameters" })
  stackParameters?: Map<string, string>;
}
