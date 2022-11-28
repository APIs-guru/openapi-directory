import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The <code>ulimit</code> settings to pass to the container.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>
**/
export declare class Ulimit extends SpeakeasyBase {
    hardLimit: number;
    name: string;
    softLimit: number;
}
