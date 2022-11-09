import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Location } from "./s3location";
import { FormatEnum } from "./formatenum";
import { ReportFrequencyEnum } from "./reportfrequencyenum";


// ReportDefinition
/** 
 * The configuration of a report in AWS Application Cost Profiler.
**/
export class ReportDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=destinationS3Location" })
  destinationS3Location?: S3Location;

  @Metadata({ data: "json, name=format" })
  format?: FormatEnum;

  @Metadata({ data: "json, name=lastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=reportDescription" })
  reportDescription?: string;

  @Metadata({ data: "json, name=reportFrequency" })
  reportFrequency?: ReportFrequencyEnum;

  @Metadata({ data: "json, name=reportId" })
  reportId?: string;
}
