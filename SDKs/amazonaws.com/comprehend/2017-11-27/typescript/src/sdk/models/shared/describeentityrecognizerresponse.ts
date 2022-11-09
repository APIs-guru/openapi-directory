import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityRecognizerProperties } from "./entityrecognizerproperties";


export class DescribeEntityRecognizerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EntityRecognizerProperties" })
  entityRecognizerProperties?: EntityRecognizerProperties;
}
