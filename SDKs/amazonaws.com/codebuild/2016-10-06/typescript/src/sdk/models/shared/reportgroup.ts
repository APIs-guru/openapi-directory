import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportExportConfig } from "./reportexportconfig";
import { ReportGroupStatusTypeEnum } from "./reportgroupstatustypeenum";
import { Tag } from "./tag";
import { ReportTypeEnum } from "./reporttypeenum";


// ReportGroup
/** 
 * A series of reports. Each report contains information about the results from running a series of test cases. You specify the test cases for a report group in the buildspec for a build project using one or more paths to the test case files. 
**/
export class ReportGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=exportConfig" })
  exportConfig?: ReportExportConfig;

  @Metadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: ReportGroupStatusTypeEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=type" })
  type?: ReportTypeEnum;
}
