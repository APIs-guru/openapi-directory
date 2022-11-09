import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntitiesDetectionJobProperties } from "./entitiesdetectionjobproperties";


export class DescribeEntitiesDetectionJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EntitiesDetectionJobProperties" })
  entitiesDetectionJobProperties?: EntitiesDetectionJobProperties;
}
