import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=AdditionalArtifacts" })
  additionalArtifacts?: AdditionalArtifactEnum[];

  @SpeakeasyMetadata({ data: "json, name=AdditionalSchemaElements" })
  additionalSchemaElements: SchemaElementEnum[];

  @SpeakeasyMetadata({ data: "json, name=BillingViewArn" })
  billingViewArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Compression" })
  compression: CompressionFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format: ReportFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=RefreshClosedReports" })
  refreshClosedReports?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ReportName" })
  reportName: string;

  @SpeakeasyMetadata({ data: "json, name=ReportVersioning" })
  reportVersioning?: ReportVersioningEnum;

  @SpeakeasyMetadata({ data: "json, name=S3Bucket" })
  s3Bucket: string;

  @SpeakeasyMetadata({ data: "json, name=S3Prefix" })
  s3Prefix: string;

  @SpeakeasyMetadata({ data: "json, name=S3Region" })
  s3Region: AwsRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=TimeUnit" })
  timeUnit: TimeUnitEnum;
}
