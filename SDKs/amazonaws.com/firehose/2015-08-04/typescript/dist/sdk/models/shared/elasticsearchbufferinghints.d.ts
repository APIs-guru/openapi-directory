import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the buffering to perform before delivering data to the Amazon ES destination.
**/
export declare class ElasticsearchBufferingHints extends SpeakeasyBase {
    intervalInSeconds?: number;
    sizeInMBs?: number;
}
