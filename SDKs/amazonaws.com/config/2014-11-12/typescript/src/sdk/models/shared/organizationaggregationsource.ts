import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OrganizationAggregationSource
/** 
 * This object contains regions to set up the aggregator and an IAM role to retrieve organization details.
**/
export class OrganizationAggregationSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllAwsRegions" })
  allAwsRegions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AwsRegions" })
  awsRegions?: string[];

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
