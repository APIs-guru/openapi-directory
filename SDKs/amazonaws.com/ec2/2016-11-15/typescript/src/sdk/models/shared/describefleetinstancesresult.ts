import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActiveInstance } from "./activeinstance";



export class DescribeFleetInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ActiveInstance })
  activeInstances?: ActiveInstance[];

  @SpeakeasyMetadata()
  fleetId?: string;

  @SpeakeasyMetadata()
  nextToken?: string;
}
