import { SpeakeasyBase } from "../../../internal/utils";
import { ReportTypeEnum } from "./reporttypeenum";
export declare class ListThingRegistrationTaskReportsResponse extends SpeakeasyBase {
    nextToken?: string;
    reportType?: ReportTypeEnum;
    resourceLinks?: string[];
}
