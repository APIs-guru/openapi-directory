import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SampleTypeEnum } from "./sampletypeenum";



// Sample
/** 
 * Represents a sample of performance data.
**/
export class Sample extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SampleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
