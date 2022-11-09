import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DelegationMetadata } from "./delegationmetadata";


export class GetDelegationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=delegations", elemType: shared.DelegationMetadata })
  delegations?: DelegationMetadata[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
