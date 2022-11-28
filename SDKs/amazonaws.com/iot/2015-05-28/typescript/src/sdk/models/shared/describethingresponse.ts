import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeThingResponse
/** 
 * The output from the DescribeThing operation.
**/
export class DescribeThingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=billingGroupName" })
  billingGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultClientId" })
  defaultClientId?: string;

  @SpeakeasyMetadata({ data: "json, name=thingArn" })
  thingArn?: string;

  @SpeakeasyMetadata({ data: "json, name=thingId" })
  thingId?: string;

  @SpeakeasyMetadata({ data: "json, name=thingName" })
  thingName?: string;

  @SpeakeasyMetadata({ data: "json, name=thingTypeName" })
  thingTypeName?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
