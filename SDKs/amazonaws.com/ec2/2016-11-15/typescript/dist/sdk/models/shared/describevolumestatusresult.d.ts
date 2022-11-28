import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeStatusItem } from "./volumestatusitem";
export declare class DescribeVolumeStatusResult extends SpeakeasyBase {
    nextToken?: string;
    volumeStatuses?: VolumeStatusItem[];
}
