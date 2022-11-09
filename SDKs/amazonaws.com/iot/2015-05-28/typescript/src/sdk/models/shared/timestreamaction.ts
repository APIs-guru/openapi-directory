import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimestreamDimension } from "./timestreamdimension";
import { TimestreamTimestamp } from "./timestreamtimestamp";


// TimestreamAction
/** 
 * The Timestream rule action writes attributes (measures) from an MQTT message into an Amazon Timestream table. For more information, see the <a href="https://docs.aws.amazon.com/iot/latest/developerguide/timestream-rule-action.html">Timestream</a> topic rule action documentation.
**/
export class TimestreamAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=databaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=dimensions", elemType: shared.TimestreamDimension })
  dimensions: TimestreamDimension[];

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=tableName" })
  tableName: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: TimestreamTimestamp;
}
