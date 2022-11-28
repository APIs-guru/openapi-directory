import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamViewTypeEnum } from "./streamviewtypeenum";



// StreamSpecification
/** 
 * Represents the DynamoDB Streams configuration for a table in DynamoDB.
**/
export class StreamSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StreamEnabled" })
  streamEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=StreamViewType" })
  streamViewType?: StreamViewTypeEnum;
}
