import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateCsvClassifierRequest } from "./updatecsvclassifierrequest";
import { UpdateGrokClassifierRequest } from "./updategrokclassifierrequest";
import { UpdateJsonClassifierRequest } from "./updatejsonclassifierrequest";
import { UpdateXmlClassifierRequest } from "./updatexmlclassifierrequest";



export class UpdateClassifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CsvClassifier" })
  csvClassifier?: UpdateCsvClassifierRequest;

  @SpeakeasyMetadata({ data: "json, name=GrokClassifier" })
  grokClassifier?: UpdateGrokClassifierRequest;

  @SpeakeasyMetadata({ data: "json, name=JsonClassifier" })
  jsonClassifier?: UpdateJsonClassifierRequest;

  @SpeakeasyMetadata({ data: "json, name=XMLClassifier" })
  xmlClassifier?: UpdateXmlClassifierRequest;
}
