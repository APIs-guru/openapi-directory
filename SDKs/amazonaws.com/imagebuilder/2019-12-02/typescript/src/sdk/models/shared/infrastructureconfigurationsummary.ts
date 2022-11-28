import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InfrastructureConfigurationSummary
/** 
 * The infrastructure used when building Amazon EC2 AMIs.
**/
export class InfrastructureConfigurationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=dateUpdated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceProfileName" })
  instanceProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceTypes" })
  instanceTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceTags" })
  resourceTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
