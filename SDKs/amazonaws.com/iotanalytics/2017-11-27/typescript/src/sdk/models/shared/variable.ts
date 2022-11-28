import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetContentVersionValue } from "./datasetcontentversionvalue";
import { OutputFileUriValue } from "./outputfileurivalue";



// Variable
/** 
 * An instance of a variable to be passed to the <code>containerAction</code> execution. Each variable must have a name and a value given by one of <code>stringValue</code>, <code>datasetContentVersionValue</code>, or <code>outputFileUriValue</code>.
**/
export class Variable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetContentVersionValue" })
  datasetContentVersionValue?: DatasetContentVersionValue;

  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=outputFileUriValue" })
  outputFileUriValue?: OutputFileUriValue;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
