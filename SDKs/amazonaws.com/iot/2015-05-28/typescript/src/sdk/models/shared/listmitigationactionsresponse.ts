import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MitigationActionIdentifier } from "./mitigationactionidentifier";



export class ListMitigationActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionIdentifiers", elemType: MitigationActionIdentifier })
  actionIdentifiers?: MitigationActionIdentifier[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
