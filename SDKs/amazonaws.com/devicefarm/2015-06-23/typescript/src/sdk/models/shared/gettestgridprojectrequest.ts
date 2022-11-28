import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTestGridProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectArn" })
  projectArn: string;
}
