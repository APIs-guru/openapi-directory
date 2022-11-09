import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Classifier } from "./classifier";


export class GetClassifiersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Classifiers", elemType: shared.Classifier })
  classifiers?: Classifier[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
