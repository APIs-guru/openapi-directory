import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BlockPublicAccessConfigurationMetadata
/** 
 * Properties that describe the Amazon Web Services principal that created the <code>BlockPublicAccessConfiguration</code> using the <code>PutBlockPublicAccessConfiguration</code> action as well as the date and time that the configuration was created. Each time a configuration for block public access is updated, Amazon EMR updates this metadata.
**/
export class BlockPublicAccessConfigurationMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedByArn" })
  createdByArn: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;
}
