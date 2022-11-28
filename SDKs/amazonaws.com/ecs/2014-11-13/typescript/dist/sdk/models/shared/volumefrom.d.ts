import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details on a data volume from another container in the same task definition.
**/
export declare class VolumeFrom extends SpeakeasyBase {
    readOnly?: boolean;
    sourceContainer?: string;
}
