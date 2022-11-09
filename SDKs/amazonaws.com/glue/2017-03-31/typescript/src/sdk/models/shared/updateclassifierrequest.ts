import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpdateCsvClassifierRequest } from "./updatecsvclassifierrequest";
import { UpdateGrokClassifierRequest } from "./updategrokclassifierrequest";
import { UpdateJsonClassifierRequest } from "./updatejsonclassifierrequest";
import { UpdateXmlClassifierRequest } from "./updatexmlclassifierrequest";


export class UpdateClassifierRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CsvClassifier" })
  csvClassifier?: UpdateCsvClassifierRequest;

  @Metadata({ data: "json, name=GrokClassifier" })
  grokClassifier?: UpdateGrokClassifierRequest;

  @Metadata({ data: "json, name=JsonClassifier" })
  jsonClassifier?: UpdateJsonClassifierRequest;

  @Metadata({ data: "json, name=XMLClassifier" })
  xmlClassifier?: UpdateXmlClassifierRequest;
}
