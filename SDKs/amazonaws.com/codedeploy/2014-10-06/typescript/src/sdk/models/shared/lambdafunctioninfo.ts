import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LambdaFunctionInfo
/** 
 *  Information about a Lambda function specified in a deployment. 
**/
export class LambdaFunctionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentVersion" })
  currentVersion?: string;

  @Metadata({ data: "json, name=functionAlias" })
  functionAlias?: string;

  @Metadata({ data: "json, name=functionName" })
  functionName?: string;

  @Metadata({ data: "json, name=targetVersion" })
  targetVersion?: string;

  @Metadata({ data: "json, name=targetVersionWeight" })
  targetVersionWeight?: number;
}
