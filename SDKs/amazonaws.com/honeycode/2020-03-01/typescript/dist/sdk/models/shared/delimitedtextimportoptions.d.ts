import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportDataCharacterEncodingEnum } from "./importdatacharacterencodingenum";
/**
 *  An object that contains the options relating to parsing delimited text as part of an import request.
**/
export declare class DelimitedTextImportOptions extends SpeakeasyBase {
    dataCharacterEncoding?: ImportDataCharacterEncodingEnum;
    delimiter: string;
    hasHeaderRow?: boolean;
    ignoreEmptyRows?: boolean;
}
