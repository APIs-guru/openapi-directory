import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteWorkGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RecursiveDeleteOption" })
  recursiveDeleteOption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=WorkGroup" })
  workGroup: string;
}
