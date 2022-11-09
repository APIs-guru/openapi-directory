import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InfrastructureConfigurationSummary
/** 
 * The infrastructure used when building Amazon EC2 AMIs.
**/
export class InfrastructureConfigurationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @Metadata({ data: "json, name=dateUpdated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=instanceProfileName" })
  instanceProfileName?: string;

  @Metadata({ data: "json, name=instanceTypes" })
  instanceTypes?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceTags" })
  resourceTags?: Map<string, string>;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
