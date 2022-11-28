import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteParameterGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeletionMessage" })
  deletionMessage?: string;
}
