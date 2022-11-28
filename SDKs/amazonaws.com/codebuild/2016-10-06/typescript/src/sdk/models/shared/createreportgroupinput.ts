import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportExportConfig } from "./reportexportconfig";
import { Tag } from "./tag";
import { ReportTypeEnum } from "./reporttypeenum";



export class CreateReportGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportConfig" })
  exportConfig: ReportExportConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ReportTypeEnum;
}
