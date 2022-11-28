import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Location } from "./s3location";
import { FormatEnum } from "./formatenum";
import { ReportFrequencyEnum } from "./reportfrequencyenum";



// ReportDefinition
/** 
 * The configuration of a report in AWS Application Cost Profiler.
**/
export class ReportDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=destinationS3Location" })
  destinationS3Location?: S3Location;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: FormatEnum;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=reportDescription" })
  reportDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=reportFrequency" })
  reportFrequency?: ReportFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=reportId" })
  reportId?: string;
}
