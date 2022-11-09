import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationStatusEnum } from "./applicationstatusenum";


export class DescribeApplicationStateResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationStatus" })
  applicationStatus?: ApplicationStatusEnum;

  @Metadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;
}
