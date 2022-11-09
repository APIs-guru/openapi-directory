import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FunctionConfiguration } from "./functionconfiguration";


// Function
/** 
 * Information about a Lambda function.
**/
export class Function extends SpeakeasyBase {
  @Metadata({ data: "json, name=FunctionArn" })
  functionArn?: string;

  @Metadata({ data: "json, name=FunctionConfiguration" })
  functionConfiguration?: FunctionConfiguration;

  @Metadata({ data: "json, name=Id" })
  id: string;
}
