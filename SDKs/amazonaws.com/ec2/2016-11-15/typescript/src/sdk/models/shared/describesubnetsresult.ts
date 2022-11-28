import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subnet } from "./subnet";



export class DescribeSubnetsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: Subnet })
  subnets?: Subnet[];
}
