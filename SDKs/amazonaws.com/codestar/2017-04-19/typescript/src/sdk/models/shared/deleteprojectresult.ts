import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProjectResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectArn" })
  projectArn?: string;

  @Metadata({ data: "json, name=stackId" })
  stackId?: string;
}
