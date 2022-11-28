import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionConfig } from "./functionconfig";
import { FunctionMetadata } from "./functionmetadata";



// FunctionSummary
/** 
 * Contains configuration information and metadata about a CloudFront function.
**/
export class FunctionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  functionConfig: FunctionConfig;

  @SpeakeasyMetadata()
  functionMetadata: FunctionMetadata;

  @SpeakeasyMetadata()
  name: string;

  @SpeakeasyMetadata()
  status?: string;
}
