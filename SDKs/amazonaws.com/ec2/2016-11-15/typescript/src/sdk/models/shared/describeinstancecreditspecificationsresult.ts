import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceCreditSpecification } from "./instancecreditspecification";



export class DescribeInstanceCreditSpecificationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InstanceCreditSpecification })
  instanceCreditSpecifications?: InstanceCreditSpecification[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
