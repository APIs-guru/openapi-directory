import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimplifiedApplication } from "./simplifiedapplication";



export class DescribeReleaseLabelOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Applications", elemType: SimplifiedApplication })
  applications?: SimplifiedApplication[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ReleaseLabel" })
  releaseLabel?: string;
}
