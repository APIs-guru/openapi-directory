import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SampleTypeEnum } from "./sampletypeenum";


// Sample
/** 
 * Represents a sample of performance data.
**/
export class Sample extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=type" })
  type?: SampleTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
