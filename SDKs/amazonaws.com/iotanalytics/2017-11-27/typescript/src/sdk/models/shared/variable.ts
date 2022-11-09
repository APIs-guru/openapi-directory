import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetContentVersionValue } from "./datasetcontentversionvalue";
import { OutputFileUriValue } from "./outputfileurivalue";


// Variable
/** 
 * An instance of a variable to be passed to the <code>containerAction</code> execution. Each variable must have a name and a value given by one of <code>stringValue</code>, <code>datasetContentVersionValue</code>, or <code>outputFileUriValue</code>.
**/
export class Variable extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetContentVersionValue" })
  datasetContentVersionValue?: DatasetContentVersionValue;

  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=outputFileUriValue" })
  outputFileUriValue?: OutputFileUriValue;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
