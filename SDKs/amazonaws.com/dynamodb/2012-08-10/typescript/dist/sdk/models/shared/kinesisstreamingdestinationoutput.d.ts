import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationStatusEnum } from "./destinationstatusenum";
export declare class KinesisStreamingDestinationOutput extends SpeakeasyBase {
    destinationStatus?: DestinationStatusEnum;
    streamArn?: string;
    tableName?: string;
}
