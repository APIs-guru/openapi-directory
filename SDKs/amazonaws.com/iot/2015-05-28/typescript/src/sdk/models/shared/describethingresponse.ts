import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeThingResponse
/** 
 * The output from the DescribeThing operation.
**/
export class DescribeThingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=billingGroupName" })
  billingGroupName?: string;

  @Metadata({ data: "json, name=defaultClientId" })
  defaultClientId?: string;

  @Metadata({ data: "json, name=thingArn" })
  thingArn?: string;

  @Metadata({ data: "json, name=thingId" })
  thingId?: string;

  @Metadata({ data: "json, name=thingName" })
  thingName?: string;

  @Metadata({ data: "json, name=thingTypeName" })
  thingTypeName?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
