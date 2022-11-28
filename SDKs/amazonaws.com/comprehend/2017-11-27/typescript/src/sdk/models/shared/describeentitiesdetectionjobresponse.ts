import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntitiesDetectionJobProperties } from "./entitiesdetectionjobproperties";



export class DescribeEntitiesDetectionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EntitiesDetectionJobProperties" })
  entitiesDetectionJobProperties?: EntitiesDetectionJobProperties;
}
