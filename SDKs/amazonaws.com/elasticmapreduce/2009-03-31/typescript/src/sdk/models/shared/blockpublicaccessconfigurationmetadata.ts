import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BlockPublicAccessConfigurationMetadata
/** 
 * Properties that describe the Amazon Web Services principal that created the <code>BlockPublicAccessConfiguration</code> using the <code>PutBlockPublicAccessConfiguration</code> action as well as the date and time that the configuration was created. Each time a configuration for block public access is updated, Amazon EMR updates this metadata.
**/
export class BlockPublicAccessConfigurationMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedByArn" })
  createdByArn: string;

  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;
}
