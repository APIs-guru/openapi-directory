import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CoipAddressUsage
/** 
 * Describes address usage for a customer-owned address pool.
**/
export class CoipAddressUsage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocationId?: string;

  @SpeakeasyMetadata()
  awsAccountId?: string;

  @SpeakeasyMetadata()
  awsService?: string;

  @SpeakeasyMetadata()
  coIp?: string;
}
