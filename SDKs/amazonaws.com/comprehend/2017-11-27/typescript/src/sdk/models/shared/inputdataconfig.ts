import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentReaderConfig } from "./documentreaderconfig";
import { InputFormatEnum } from "./inputformatenum";


// InputDataConfig
/** 
 * The input properties for an inference job.
**/
export class InputDataConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentReaderConfig" })
  documentReaderConfig?: DocumentReaderConfig;

  @Metadata({ data: "json, name=InputFormat" })
  inputFormat?: InputFormatEnum;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
