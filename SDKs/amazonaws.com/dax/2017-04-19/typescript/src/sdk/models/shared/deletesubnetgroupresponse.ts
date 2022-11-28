import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSubnetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeletionMessage" })
  deletionMessage?: string;
}
