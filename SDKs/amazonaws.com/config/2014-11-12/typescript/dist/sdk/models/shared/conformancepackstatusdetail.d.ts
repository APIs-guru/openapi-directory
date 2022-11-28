import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackStateEnum } from "./conformancepackstateenum";
/**
 * Status details of a conformance pack.
**/
export declare class ConformancePackStatusDetail extends SpeakeasyBase {
    conformancePackArn: string;
    conformancePackId: string;
    conformancePackName: string;
    conformancePackState: ConformancePackStateEnum;
    conformancePackStatusReason?: string;
    lastUpdateCompletedTime?: Date;
    lastUpdateRequestedTime: Date;
    stackArn: string;
}
