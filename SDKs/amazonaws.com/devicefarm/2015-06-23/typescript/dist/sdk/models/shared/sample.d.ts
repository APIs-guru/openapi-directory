import { SpeakeasyBase } from "../../../internal/utils";
import { SampleTypeEnum } from "./sampletypeenum";
/**
 * Represents a sample of performance data.
**/
export declare class Sample extends SpeakeasyBase {
    arn?: string;
    type?: SampleTypeEnum;
    url?: string;
}
