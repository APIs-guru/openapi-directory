import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportDataCharacterEncodingEnum } from "./importdatacharacterencodingenum";



// DelimitedTextImportOptions
/** 
 *  An object that contains the options relating to parsing delimited text as part of an import request. 
**/
export class DelimitedTextImportOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataCharacterEncoding" })
  dataCharacterEncoding?: ImportDataCharacterEncodingEnum;

  @SpeakeasyMetadata({ data: "json, name=delimiter" })
  delimiter: string;

  @SpeakeasyMetadata({ data: "json, name=hasHeaderRow" })
  hasHeaderRow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ignoreEmptyRows" })
  ignoreEmptyRows?: boolean;
}
