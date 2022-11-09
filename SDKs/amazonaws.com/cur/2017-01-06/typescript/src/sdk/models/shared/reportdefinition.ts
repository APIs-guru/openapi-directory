import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AdditionalArtifactEnum } from "./additionalartifactenum";
import { SchemaElementEnum } from "./schemaelementenum";
import { CompressionFormatEnum } from "./compressionformatenum";
import { ReportFormatEnum } from "./reportformatenum";
import { ReportVersioningEnum } from "./reportversioningenum";
import { AwsRegionEnum } from "./awsregionenum";
import { TimeUnitEnum } from "./timeunitenum";


// ReportDefinition
/** 
 * The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition. 
**/
export class ReportDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalArtifacts" })
  additionalArtifacts?: AdditionalArtifactEnum[];

  @Metadata({ data: "json, name=AdditionalSchemaElements" })
  additionalSchemaElements: SchemaElementEnum[];

  @Metadata({ data: "json, name=BillingViewArn" })
  billingViewArn?: string;

  @Metadata({ data: "json, name=Compression" })
  compression: CompressionFormatEnum;

  @Metadata({ data: "json, name=Format" })
  format: ReportFormatEnum;

  @Metadata({ data: "json, name=RefreshClosedReports" })
  refreshClosedReports?: boolean;

  @Metadata({ data: "json, name=ReportName" })
  reportName: string;

  @Metadata({ data: "json, name=ReportVersioning" })
  reportVersioning?: ReportVersioningEnum;

  @Metadata({ data: "json, name=S3Bucket" })
  s3Bucket: string;

  @Metadata({ data: "json, name=S3Prefix" })
  s3Prefix: string;

  @Metadata({ data: "json, name=S3Region" })
  s3Region: AwsRegionEnum;

  @Metadata({ data: "json, name=TimeUnit" })
  timeUnit: TimeUnitEnum;
}
