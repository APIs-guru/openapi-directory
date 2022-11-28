import { SpeakeasyBase } from "../../../internal/utils";
import { ReportExportConfig } from "./reportexportconfig";
import { ReportGroupStatusTypeEnum } from "./reportgroupstatustypeenum";
import { Tag } from "./tag";
import { ReportTypeEnum } from "./reporttypeenum";
/**
 * A series of reports. Each report contains information about the results from running a series of test cases. You specify the test cases for a report group in the buildspec for a build project using one or more paths to the test case files.
**/
export declare class ReportGroup extends SpeakeasyBase {
    arn?: string;
    created?: Date;
    exportConfig?: ReportExportConfig;
    lastModified?: Date;
    name?: string;
    status?: ReportGroupStatusTypeEnum;
    tags?: Tag[];
    type?: ReportTypeEnum;
}
