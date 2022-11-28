import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEntityRecognizerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EntityRecognizerArn" })
  entityRecognizerArn: string;
}
