import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PiiEntitiesDetectionJobProperties } from "./piientitiesdetectionjobproperties";



export class ListPiiEntitiesDetectionJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PiiEntitiesDetectionJobPropertiesList", elemType: PiiEntitiesDetectionJobProperties })
  piiEntitiesDetectionJobPropertiesList?: PiiEntitiesDetectionJobProperties[];
}
