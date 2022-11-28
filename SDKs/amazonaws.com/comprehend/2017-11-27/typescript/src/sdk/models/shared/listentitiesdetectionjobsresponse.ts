import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntitiesDetectionJobProperties } from "./entitiesdetectionjobproperties";



export class ListEntitiesDetectionJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EntitiesDetectionJobPropertiesList", elemType: EntitiesDetectionJobProperties })
  entitiesDetectionJobPropertiesList?: EntitiesDetectionJobProperties[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
