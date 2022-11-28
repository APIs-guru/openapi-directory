import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Vpc } from "./vpc";



export class DescribeVpcsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: Vpc })
  vpcs?: Vpc[];
}
