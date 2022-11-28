import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.
**/
export declare class BufferingHints extends SpeakeasyBase {
    intervalInSeconds?: number;
    sizeInMBs?: number;
}
