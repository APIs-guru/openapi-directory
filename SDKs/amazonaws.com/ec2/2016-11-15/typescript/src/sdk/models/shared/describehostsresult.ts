import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Host } from "./host";



export class DescribeHostsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Host })
  hosts?: Host[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
