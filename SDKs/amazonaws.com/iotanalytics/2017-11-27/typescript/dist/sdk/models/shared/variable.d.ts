import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetContentVersionValue } from "./datasetcontentversionvalue";
import { OutputFileUriValue } from "./outputfileurivalue";
/**
 * An instance of a variable to be passed to the <code>containerAction</code> execution. Each variable must have a name and a value given by one of <code>stringValue</code>, <code>datasetContentVersionValue</code>, or <code>outputFileUriValue</code>.
**/
export declare class Variable extends SpeakeasyBase {
    datasetContentVersionValue?: DatasetContentVersionValue;
    doubleValue?: number;
    name: string;
    outputFileUriValue?: OutputFileUriValue;
    stringValue?: string;
}
