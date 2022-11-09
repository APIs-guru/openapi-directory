import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DistributionConfigurationSummary
/** 
 * A high-level overview of a distribution configuration.
**/
export class DistributionConfigurationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated?: string;

  @Metadata({ data: "json, name=dateUpdated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=regions" })
  regions?: string[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
