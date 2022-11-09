import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PiiEntitiesDetectionJobProperties } from "./piientitiesdetectionjobproperties";


export class DescribePiiEntitiesDetectionJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PiiEntitiesDetectionJobProperties" })
  piiEntitiesDetectionJobProperties?: PiiEntitiesDetectionJobProperties;
}
