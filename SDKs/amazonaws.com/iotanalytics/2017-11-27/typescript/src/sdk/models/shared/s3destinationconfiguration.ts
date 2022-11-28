import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlueConfiguration } from "./glueconfiguration";



// S3DestinationConfiguration
/** 
 * Configuration information for delivery of dataset contents to Amazon Simple Storage Service (Amazon S3).
**/
export class S3DestinationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "json, name=glueConfiguration" })
  glueConfiguration?: GlueConfiguration;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}
