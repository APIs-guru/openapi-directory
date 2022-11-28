import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=deleteStack" })
  deleteStack?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
