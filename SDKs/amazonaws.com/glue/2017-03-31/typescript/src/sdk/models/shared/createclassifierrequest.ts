import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateCsvClassifierRequest } from "./createcsvclassifierrequest";
import { CreateGrokClassifierRequest } from "./creategrokclassifierrequest";
import { CreateJsonClassifierRequest } from "./createjsonclassifierrequest";
import { CreateXmlClassifierRequest } from "./createxmlclassifierrequest";



export class CreateClassifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CsvClassifier" })
  csvClassifier?: CreateCsvClassifierRequest;

  @SpeakeasyMetadata({ data: "json, name=GrokClassifier" })
  grokClassifier?: CreateGrokClassifierRequest;

  @SpeakeasyMetadata({ data: "json, name=JsonClassifier" })
  jsonClassifier?: CreateJsonClassifierRequest;

  @SpeakeasyMetadata({ data: "json, name=XMLClassifier" })
  xmlClassifier?: CreateXmlClassifierRequest;
}
