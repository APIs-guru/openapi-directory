import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceEventWindow } from "./instanceeventwindow";



export class DescribeInstanceEventWindowsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InstanceEventWindow })
  instanceEventWindows?: InstanceEventWindow[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
