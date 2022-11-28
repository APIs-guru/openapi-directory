import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentReaderConfig } from "./documentreaderconfig";
import { InputFormatEnum } from "./inputformatenum";
/**
 * The input properties for an inference job.
**/
export declare class InputDataConfig extends SpeakeasyBase {
    documentReaderConfig?: DocumentReaderConfig;
    inputFormat?: InputFormatEnum;
    s3Uri: string;
}
