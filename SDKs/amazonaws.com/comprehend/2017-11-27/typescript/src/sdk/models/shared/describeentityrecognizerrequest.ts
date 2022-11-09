import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeEntityRecognizerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EntityRecognizerArn" })
  entityRecognizerArn: string;
}
