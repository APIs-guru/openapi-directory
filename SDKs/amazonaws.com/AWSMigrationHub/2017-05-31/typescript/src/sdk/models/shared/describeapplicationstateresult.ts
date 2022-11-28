import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationStatusEnum } from "./applicationstatusenum";



export class DescribeApplicationStateResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationStatus" })
  applicationStatus?: ApplicationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;
}
