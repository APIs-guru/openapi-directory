import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportTypeEnum } from "./reporttypeenum";



export class ListThingRegistrationTaskReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=reportType" })
  reportType?: ReportTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resourceLinks" })
  resourceLinks?: string[];
}
