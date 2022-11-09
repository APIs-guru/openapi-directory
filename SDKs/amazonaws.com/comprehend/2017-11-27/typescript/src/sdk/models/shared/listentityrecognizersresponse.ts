import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityRecognizerProperties } from "./entityrecognizerproperties";


export class ListEntityRecognizersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EntityRecognizerPropertiesList", elemType: shared.EntityRecognizerProperties })
  entityRecognizerPropertiesList?: EntityRecognizerProperties[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
