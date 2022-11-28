import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Classifier } from "./classifier";



export class GetClassifierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Classifier" })
  classifier?: Classifier;
}
