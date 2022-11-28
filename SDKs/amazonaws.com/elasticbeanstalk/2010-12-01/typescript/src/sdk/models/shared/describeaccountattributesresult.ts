import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceQuotas } from "./resourcequotas";



export class DescribeAccountAttributesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  resourceQuotas?: ResourceQuotas;
}
