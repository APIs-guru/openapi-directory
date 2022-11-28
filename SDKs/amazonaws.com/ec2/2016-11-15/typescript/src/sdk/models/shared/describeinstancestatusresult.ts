import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceStatus } from "./instancestatus";



export class DescribeInstanceStatusResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InstanceStatus })
  instanceStatuses?: InstanceStatus[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
