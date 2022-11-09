import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=deleteStack" })
  deleteStack?: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;
}
