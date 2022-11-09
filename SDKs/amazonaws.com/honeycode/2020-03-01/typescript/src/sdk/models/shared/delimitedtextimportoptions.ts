import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportDataCharacterEncodingEnum } from "./importdatacharacterencodingenum";


// DelimitedTextImportOptions
/** 
 *  An object that contains the options relating to parsing delimited text as part of an import request. 
**/
export class DelimitedTextImportOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataCharacterEncoding" })
  dataCharacterEncoding?: ImportDataCharacterEncodingEnum;

  @Metadata({ data: "json, name=delimiter" })
  delimiter: string;

  @Metadata({ data: "json, name=hasHeaderRow" })
  hasHeaderRow?: boolean;

  @Metadata({ data: "json, name=ignoreEmptyRows" })
  ignoreEmptyRows?: boolean;
}
