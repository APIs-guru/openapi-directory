import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LambdaActivity
/** 
 * An activity that runs a Lambda function to modify the message.
**/
export class LambdaActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchSize" })
  batchSize: number;

  @Metadata({ data: "json, name=lambdaName" })
  lambdaName: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}
