import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ToolchainSource } from "./toolchainsource";



// Toolchain
/** 
 * The toolchain template file provided with the project request. AWS CodeStar uses the template to provision the toolchain stack in AWS CloudFormation.
**/
export class Toolchain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: ToolchainSource;

  @SpeakeasyMetadata({ data: "json, name=stackParameters" })
  stackParameters?: Map<string, string>;
}
