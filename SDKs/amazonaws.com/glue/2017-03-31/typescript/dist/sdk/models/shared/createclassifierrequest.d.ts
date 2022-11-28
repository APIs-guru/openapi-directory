import { SpeakeasyBase } from "../../../internal/utils";
import { CreateCsvClassifierRequest } from "./createcsvclassifierrequest";
import { CreateGrokClassifierRequest } from "./creategrokclassifierrequest";
import { CreateJsonClassifierRequest } from "./createjsonclassifierrequest";
import { CreateXmlClassifierRequest } from "./createxmlclassifierrequest";
export declare class CreateClassifierRequest extends SpeakeasyBase {
    csvClassifier?: CreateCsvClassifierRequest;
    grokClassifier?: CreateGrokClassifierRequest;
    jsonClassifier?: CreateJsonClassifierRequest;
    xmlClassifier?: CreateXmlClassifierRequest;
}
