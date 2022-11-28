import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream.
**/
export declare class KinesisStreamSourceConfiguration extends SpeakeasyBase {
    kinesisStreamArn: string;
    roleArn: string;
}
