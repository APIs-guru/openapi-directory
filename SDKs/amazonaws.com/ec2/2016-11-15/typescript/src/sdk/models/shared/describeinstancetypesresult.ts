import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeInfo } from "./instancetypeinfo";



export class DescribeInstanceTypesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InstanceTypeInfo })
  instanceTypes?: InstanceTypeInfo[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
