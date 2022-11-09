import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AdditionalArtifactEnum } from "./additionalartifactenum";
import { SchemaElementEnum } from "./schemaelementenum";
import { CompressionFormatEnum } from "./compressionformatenum";
import { ReportFormatEnum } from "./reportformatenum";
import { ReportVersioningEnum } from "./reportversioningenum";
import { AwsRegionEnum } from "./awsregionenum";
import { TimeUnitEnum } from "./timeunitenum";
/**
 * The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition.
**/
export declare class ReportDefinition extends SpeakeasyBase {
    additionalArtifacts?: AdditionalArtifactEnum[];
    additionalSchemaElements: SchemaElementEnum[];
    billingViewArn?: string;
    compression: CompressionFormatEnum;
    format: ReportFormatEnum;
    refreshClosedReports?: boolean;
    reportName: string;
    reportVersioning?: ReportVersioningEnum;
    s3Bucket: string;
    s3Prefix: string;
    s3Region: AwsRegionEnum;
    timeUnit: TimeUnitEnum;
}
