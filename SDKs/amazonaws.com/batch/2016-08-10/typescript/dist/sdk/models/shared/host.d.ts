import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Determine whether your data volume persists on the host container instance and where it is stored. If this parameter is empty, then the Docker daemon assigns a host path for your data volume, but the data isn't guaranteed to persist after the containers associated with it stop running.
**/
export declare class Host extends SpeakeasyBase {
    sourcePath?: string;
}
