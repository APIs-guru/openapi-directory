import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MitigationActionIdentifier } from "./mitigationactionidentifier";


export class ListMitigationActionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionIdentifiers", elemType: shared.MitigationActionIdentifier })
  actionIdentifiers?: MitigationActionIdentifier[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
