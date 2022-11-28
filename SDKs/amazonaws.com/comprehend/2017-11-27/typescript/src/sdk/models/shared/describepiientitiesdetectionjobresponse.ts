import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PiiEntitiesDetectionJobProperties } from "./piientitiesdetectionjobproperties";



export class DescribePiiEntitiesDetectionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PiiEntitiesDetectionJobProperties" })
  piiEntitiesDetectionJobProperties?: PiiEntitiesDetectionJobProperties;
}
