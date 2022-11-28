import { SpeakeasyBase } from "../../../internal/utils";
import { StreamViewTypeEnum } from "./streamviewtypeenum";
/**
 * Represents the DynamoDB Streams configuration for a table in DynamoDB.
**/
export declare class StreamSpecification extends SpeakeasyBase {
    streamEnabled: boolean;
    streamViewType?: StreamViewTypeEnum;
}
