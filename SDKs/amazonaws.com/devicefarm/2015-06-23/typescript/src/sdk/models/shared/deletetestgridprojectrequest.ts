import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTestGridProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectArn" })
  projectArn: string;
}
