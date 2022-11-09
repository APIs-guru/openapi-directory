import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountAggregationSource
/** 
 * A collection of accounts and regions.
**/
export class AccountAggregationSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountIds" })
  accountIds: string[];

  @Metadata({ data: "json, name=AllAwsRegions" })
  allAwsRegions?: boolean;

  @Metadata({ data: "json, name=AwsRegions" })
  awsRegions?: string[];
}
