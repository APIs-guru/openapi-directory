import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LambdaActivity
/** 
 * An activity that runs a Lambda function to modify the message.
**/
export class LambdaActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchSize" })
  batchSize: number;

  @SpeakeasyMetadata({ data: "json, name=lambdaName" })
  lambdaName: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}
