import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTestGridProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectArn" })
  projectArn: string;
}
