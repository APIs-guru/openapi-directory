import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntitiesDetectionJobProperties } from "./entitiesdetectionjobproperties";


export class ListEntitiesDetectionJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EntitiesDetectionJobPropertiesList", elemType: shared.EntitiesDetectionJobProperties })
  entitiesDetectionJobPropertiesList?: EntitiesDetectionJobProperties[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
