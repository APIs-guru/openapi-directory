import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestGridSessionStatusEnum } from "./testgridsessionstatusenum";



// TestGridSession
/** 
 * A <a>TestGridSession</a> is a single instance of a browser launched from the URL provided by a call to <a>CreateTestGridUrl</a>.
**/
export class TestGridSession extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=billingMinutes" })
  billingMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=ended" })
  ended?: Date;

  @SpeakeasyMetadata({ data: "json, name=seleniumProperties" })
  seleniumProperties?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TestGridSessionStatusEnum;
}
