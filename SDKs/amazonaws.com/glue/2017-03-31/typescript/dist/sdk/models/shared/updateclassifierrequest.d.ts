import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateCsvClassifierRequest } from "./updatecsvclassifierrequest";
import { UpdateGrokClassifierRequest } from "./updategrokclassifierrequest";
import { UpdateJsonClassifierRequest } from "./updatejsonclassifierrequest";
import { UpdateXmlClassifierRequest } from "./updatexmlclassifierrequest";
export declare class UpdateClassifierRequest extends SpeakeasyBase {
    csvClassifier?: UpdateCsvClassifierRequest;
    grokClassifier?: UpdateGrokClassifierRequest;
    jsonClassifier?: UpdateJsonClassifierRequest;
    xmlClassifier?: UpdateXmlClassifierRequest;
}
