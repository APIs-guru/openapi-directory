import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DelegationMetadata } from "./delegationmetadata";



export class GetDelegationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delegations", elemType: DelegationMetadata })
  delegations?: DelegationMetadata[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
