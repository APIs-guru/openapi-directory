import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentReaderConfig } from "./documentreaderconfig";
import { InputFormatEnum } from "./inputformatenum";



// InputDataConfig
/** 
 * The input properties for an inference job.
**/
export class InputDataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentReaderConfig" })
  documentReaderConfig?: DocumentReaderConfig;

  @SpeakeasyMetadata({ data: "json, name=InputFormat" })
  inputFormat?: InputFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
