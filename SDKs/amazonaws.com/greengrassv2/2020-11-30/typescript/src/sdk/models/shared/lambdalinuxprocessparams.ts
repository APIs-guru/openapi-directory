import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LambdaContainerParams } from "./lambdacontainerparams";
import { LambdaIsolationModeEnum } from "./lambdaisolationmodeenum";



// LambdaLinuxProcessParams
/** 
 * Contains parameters for a Linux process that contains an Lambda function.
**/
export class LambdaLinuxProcessParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerParams" })
  containerParams?: LambdaContainerParams;

  @SpeakeasyMetadata({ data: "json, name=isolationMode" })
  isolationMode?: LambdaIsolationModeEnum;
}
