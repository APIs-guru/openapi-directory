import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OrganizationAggregationSource
/** 
 * This object contains regions to set up the aggregator and an IAM role to retrieve organization details.
**/
export class OrganizationAggregationSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllAwsRegions" })
  allAwsRegions?: boolean;

  @Metadata({ data: "json, name=AwsRegions" })
  awsRegions?: string[];

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
