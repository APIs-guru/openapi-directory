import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportTypeEnum } from "./reporttypeenum";


export class ListThingRegistrationTaskReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=reportType" })
  reportType?: ReportTypeEnum;

  @Metadata({ data: "json, name=resourceLinks" })
  resourceLinks?: string[];
}
