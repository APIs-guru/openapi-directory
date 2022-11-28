import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountAggregationSource
/** 
 * A collection of accounts and regions.
**/
export class AccountAggregationSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountIds" })
  accountIds: string[];

  @SpeakeasyMetadata({ data: "json, name=AllAwsRegions" })
  allAwsRegions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AwsRegions" })
  awsRegions?: string[];
}
