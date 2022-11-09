import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteWorkGroupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=RecursiveDeleteOption" })
  recursiveDeleteOption?: boolean;

  @Metadata({ data: "json, name=WorkGroup" })
  workGroup: string;
}
