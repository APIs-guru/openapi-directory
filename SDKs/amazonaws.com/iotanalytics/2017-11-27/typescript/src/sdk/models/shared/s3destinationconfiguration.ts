import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GlueConfiguration } from "./glueconfiguration";


// S3DestinationConfiguration
/** 
 * Configuration information for delivery of dataset contents to Amazon Simple Storage Service (Amazon S3).
**/
export class S3DestinationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket: string;

  @Metadata({ data: "json, name=glueConfiguration" })
  glueConfiguration?: GlueConfiguration;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}
