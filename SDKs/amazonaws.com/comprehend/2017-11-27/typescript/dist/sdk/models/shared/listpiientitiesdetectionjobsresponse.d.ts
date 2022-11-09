import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PiiEntitiesDetectionJobProperties } from "./piientitiesdetectionjobproperties";
export declare class ListPiiEntitiesDetectionJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    piiEntitiesDetectionJobPropertiesList?: PiiEntitiesDetectionJobProperties[];
}
