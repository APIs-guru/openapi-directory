import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateCsvClassifierRequest } from "./createcsvclassifierrequest";
import { CreateGrokClassifierRequest } from "./creategrokclassifierrequest";
import { CreateJsonClassifierRequest } from "./createjsonclassifierrequest";
import { CreateXmlClassifierRequest } from "./createxmlclassifierrequest";


export class CreateClassifierRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CsvClassifier" })
  csvClassifier?: CreateCsvClassifierRequest;

  @Metadata({ data: "json, name=GrokClassifier" })
  grokClassifier?: CreateGrokClassifierRequest;

  @Metadata({ data: "json, name=JsonClassifier" })
  jsonClassifier?: CreateJsonClassifierRequest;

  @Metadata({ data: "json, name=XMLClassifier" })
  xmlClassifier?: CreateXmlClassifierRequest;
}
