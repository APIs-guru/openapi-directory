import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrincipalIdFormat } from "./principalidformat";



export class DescribePrincipalIdFormatResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: PrincipalIdFormat })
  principals?: PrincipalIdFormat[];
}
