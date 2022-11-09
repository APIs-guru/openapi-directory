import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTestGridProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectArn" })
  projectArn: string;
}
