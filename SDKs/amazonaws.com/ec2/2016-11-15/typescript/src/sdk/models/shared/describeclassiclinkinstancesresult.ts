import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassicLinkInstance } from "./classiclinkinstance";



export class DescribeClassicLinkInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClassicLinkInstance })
  instances?: ClassicLinkInstance[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
