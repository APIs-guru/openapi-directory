import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionStageEnum } from "./functionstageenum";



// FunctionMetadata
/** 
 * Contains metadata about a CloudFront function.
**/
export class FunctionMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  createdTime?: Date;

  @SpeakeasyMetadata()
  functionArn: string;

  @SpeakeasyMetadata()
  lastModifiedTime: Date;

  @SpeakeasyMetadata()
  stage?: FunctionStageEnum;
}
