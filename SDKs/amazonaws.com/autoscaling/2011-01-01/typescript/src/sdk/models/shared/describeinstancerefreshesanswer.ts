import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceRefresh } from "./instancerefresh";



export class DescribeInstanceRefreshesAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InstanceRefresh })
  instanceRefreshes?: InstanceRefresh[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
