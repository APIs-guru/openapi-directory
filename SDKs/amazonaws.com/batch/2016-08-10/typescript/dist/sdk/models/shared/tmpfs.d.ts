import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * <p>The container path, mount options, and size of the tmpfs mount.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>
**/
export declare class Tmpfs extends SpeakeasyBase {
    containerPath: string;
    mountOptions?: string[];
    size: number;
}
