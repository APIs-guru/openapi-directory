import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LambdaFunctionInfo
/** 
 *  Information about a Lambda function specified in a deployment. 
**/
export class LambdaFunctionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentVersion" })
  currentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=functionAlias" })
  functionAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=functionName" })
  functionName?: string;

  @SpeakeasyMetadata({ data: "json, name=targetVersion" })
  targetVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=targetVersionWeight" })
  targetVersionWeight?: number;
}
