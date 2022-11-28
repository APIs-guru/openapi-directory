import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionConfiguration } from "./functionconfiguration";



// Function
/** 
 * Information about a Lambda function.
**/
export class Function extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FunctionArn" })
  functionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FunctionConfiguration" })
  functionConfiguration?: FunctionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;
}
