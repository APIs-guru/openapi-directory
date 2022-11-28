import { SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";
export declare class BatchGetReportsOutput extends SpeakeasyBase {
    reports?: Report[];
    reportsNotFound?: string[];
}
