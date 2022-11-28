import { SpeakeasyBase } from "../../../internal/utils";
import { PiiEntitiesDetectionJobProperties } from "./piientitiesdetectionjobproperties";
export declare class ListPiiEntitiesDetectionJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    piiEntitiesDetectionJobPropertiesList?: PiiEntitiesDetectionJobProperties[];
}
