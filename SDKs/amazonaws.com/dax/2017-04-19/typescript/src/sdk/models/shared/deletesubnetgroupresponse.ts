import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSubnetGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeletionMessage" })
  deletionMessage?: string;
}
