import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Classifier } from "./classifier";


export class GetClassifierResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Classifier" })
  classifier?: Classifier;
}
