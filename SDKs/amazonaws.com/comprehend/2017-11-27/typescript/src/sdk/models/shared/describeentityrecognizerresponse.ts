import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityRecognizerProperties } from "./entityrecognizerproperties";



export class DescribeEntityRecognizerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EntityRecognizerProperties" })
  entityRecognizerProperties?: EntityRecognizerProperties;
}
