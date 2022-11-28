import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityRecognizerProperties } from "./entityrecognizerproperties";



export class ListEntityRecognizersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EntityRecognizerPropertiesList", elemType: EntityRecognizerProperties })
  entityRecognizerPropertiesList?: EntityRecognizerProperties[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
