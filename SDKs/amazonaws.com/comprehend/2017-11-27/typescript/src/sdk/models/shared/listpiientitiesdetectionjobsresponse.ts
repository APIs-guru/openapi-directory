import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PiiEntitiesDetectionJobProperties } from "./piientitiesdetectionjobproperties";


export class ListPiiEntitiesDetectionJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PiiEntitiesDetectionJobPropertiesList", elemType: shared.PiiEntitiesDetectionJobProperties })
  piiEntitiesDetectionJobPropertiesList?: PiiEntitiesDetectionJobProperties[];
}
