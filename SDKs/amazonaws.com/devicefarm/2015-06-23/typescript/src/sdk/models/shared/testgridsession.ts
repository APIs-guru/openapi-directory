import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TestGridSessionStatusEnum } from "./testgridsessionstatusenum";


// TestGridSession
/** 
 * A <a>TestGridSession</a> is a single instance of a browser launched from the URL provided by a call to <a>CreateTestGridUrl</a>.
**/
export class TestGridSession extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=billingMinutes" })
  billingMinutes?: number;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=ended" })
  ended?: Date;

  @Metadata({ data: "json, name=seleniumProperties" })
  seleniumProperties?: string;

  @Metadata({ data: "json, name=status" })
  status?: TestGridSessionStatusEnum;
}
