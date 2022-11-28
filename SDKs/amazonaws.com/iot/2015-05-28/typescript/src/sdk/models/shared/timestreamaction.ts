import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimestreamDimension } from "./timestreamdimension";
import { TimestreamTimestamp } from "./timestreamtimestamp";



// TimestreamAction
/** 
 * The Timestream rule action writes attributes (measures) from an MQTT message into an Amazon Timestream table. For more information, see the <a href="https://docs.aws.amazon.com/iot/latest/developerguide/timestream-rule-action.html">Timestream</a> topic rule action documentation.
**/
export class TimestreamAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: TimestreamDimension })
  dimensions: TimestreamDimension[];

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=tableName" })
  tableName: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: TimestreamTimestamp;
}
