import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportExportConfig } from "./reportexportconfig";
import { ReportGroupStatusTypeEnum } from "./reportgroupstatustypeenum";
import { Tag } from "./tag";
import { ReportTypeEnum } from "./reporttypeenum";



// ReportGroup
/** 
 * A series of reports. Each report contains information about the results from running a series of test cases. You specify the test cases for a report group in the buildspec for a build project using one or more paths to the test case files. 
**/
export class ReportGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=exportConfig" })
  exportConfig?: ReportExportConfig;

  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ReportGroupStatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ReportTypeEnum;
}
