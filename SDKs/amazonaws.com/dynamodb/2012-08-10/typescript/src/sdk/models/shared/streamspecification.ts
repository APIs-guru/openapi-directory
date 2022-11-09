import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StreamViewTypeEnum } from "./streamviewtypeenum";


// StreamSpecification
/** 
 * Represents the DynamoDB Streams configuration for a table in DynamoDB.
**/
export class StreamSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=StreamEnabled" })
  streamEnabled: boolean;

  @Metadata({ data: "json, name=StreamViewType" })
  streamViewType?: StreamViewTypeEnum;
}
