import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LambdaContainerParams } from "./lambdacontainerparams";
import { LambdaIsolationModeEnum } from "./lambdaisolationmodeenum";


// LambdaLinuxProcessParams
/** 
 * Contains parameters for a Linux process that contains an Lambda function.
**/
export class LambdaLinuxProcessParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerParams" })
  containerParams?: LambdaContainerParams;

  @Metadata({ data: "json, name=isolationMode" })
  isolationMode?: LambdaIsolationModeEnum;
}
