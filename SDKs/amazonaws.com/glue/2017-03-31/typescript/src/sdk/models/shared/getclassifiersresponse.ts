import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Classifier } from "./classifier";



export class GetClassifiersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Classifiers", elemType: Classifier })
  classifiers?: Classifier[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
